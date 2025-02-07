import User from "../models/loginModel.js";
import sendEmail from "../utility/sendEmail.js"; // Import email sending function

// Function to generate a 6-digit MPIN
const generateMPIN = () =>
{
    return Math.floor(100000 + Math.random() * 900000);
};

// Controller for handling MPIN login
const loginController = async (req, res) =>
{
    const { PhoneNumber, Email } = req.body;

    try
    {
        // Check if the user exists
        let user = await User.findOne({ PhoneNumber });

        if (user)
        {
            // If user exists, send the existing MPIN via email
            await sendEmail(PhoneNumber, user.Email, user.MPIN);
            return res.status(200).json({ message: "Redirect to MPIN page.", MPIN: user.MPIN });
        }

        // If user is new, generate MPIN and create user
        const mpin = generateMPIN();
        const newUser = new User({
            PhoneNumber,
            Email,
            MPIN: mpin
        });

        // Save user to database
        await newUser.save();

        // Send MPIN via email
        await sendEmail(PhoneNumber, Email, mpin);

        return res.status(200).json({ message: "MPIN sent successfully via email. Redirect to MPIN page.", MPIN: mpin });

    } catch (error)
    {
        console.error(error.message);
        return res.status(500).json({ message: "An error occurred." });
    }
};

// Controller for verifying MPIN
const verifyMPIN = async (req, res) =>
{
    const { PhoneNumber, MPIN } = req.body;

    try
    {
        let user = await User.findOne({ PhoneNumber });

        if (!user)
        {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.MPIN !== MPIN)
        {
            return res.status(400).json({ message: "Invalid MPIN. Please try again." });
        }

        return res.status(200).json({ message: "MPIN verified successfully." });
    } catch (error)
    {
        console.error(error.message);
        return res.status(500).json({ message: "An error occurred." });
    }
};

// Controller to resend MPIN
const resendMPIN = async (req, res) =>
{
    const { PhoneNumber } = req.body;

    try
    {
        let user = await User.findOne({ PhoneNumber });

        if (!user)
        {
            return res.status(404).json({ message: "User not found." });
        }

        // Generate a new MPIN
        const newMPIN = generateMPIN();
        user.MPIN = newMPIN;
        await user.save();

        // Send new MPIN via email
        await sendEmail(user.PhoneNumber, user.Email, newMPIN);

        return res.status(200).json({ message: "New MPIN sent successfully." });
    } catch (error)
    {
        console.error(error.message);
        return res.status(500).json({ message: "An error occurred." });
    }
};

export { loginController, verifyMPIN, resendMPIN };
