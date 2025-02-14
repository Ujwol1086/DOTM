import User from "../models/loginModel.js";
import sendEmail from "../utility/sendEmail.js"; // Import email sending function

// Function to generate a 6-digit MPIN
const generateMPIN = () =>
{
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit MPIN
};

// Combined login controller
export const loginController = async (req, res) =>
{
    const { PhoneNumber, Email, MPIN } = req.body;

    try
    {
        // Check if MPIN is provided (for login verification)
        if (MPIN)
        {
            let user = await User.findOne({ PhoneNumber });

            if (!user)
            {
                return res.status(404).json({ message: "User not found." });
            }

            // Verify the MPIN
            if (user.MPIN !== MPIN)
            {
                return res.status(400).json({ message: "Invalid MPIN. Please try again." });
            }

            // If MPIN is verified successfully
            return res.status(200).json({ message: "MPIN verified successfully. Login successful." });
        }

        // If MPIN is not provided, continue with login or user creation
        let user = await User.findOne({ PhoneNumber });

        if (user)
        {
            // If user exists, send the existing MPIN via email
            await sendEmail(PhoneNumber, user.Email, user.MPIN);
            return res.status(200).json({ message: "MPIN sent via email. Redirect to MPIN page." });
        }

        // If user does not exist, generate a new MPIN and create the user
        const mpin = generateMPIN();
        const newUser = new User({
            PhoneNumber,
            Email,
            MPIN: mpin
        });

        // Save new user to database
        await newUser.save();

        // Send the generated MPIN via email
        await sendEmail(PhoneNumber, Email, mpin);

        return res.status(200).json({ message: "MPIN sent successfully via email. Redirect to MPIN page." });

    } catch (error)
    {
        console.error(error.message);
        return res.status(500).json({ message: "An error occurred." });
    }
};

// API to verify MPIN
export const verifyMPIN = async (req, res) =>
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

        // If MPIN is correct
        return res.status(200).json({ message: "MPIN verified successfully. Login successful." });
    }
    catch (error)
    {
        console.error(error.message);
        return res.status(500).json({ message: "An error occurred during MPIN verification." });
    }
};
export const resendMPIN = async (req, res) =>
{
    const { PhoneNumber } = req.body;

    try
    {
        // Find the user by phone number
        let user = await User.findOne({ PhoneNumber });

        if (!user)
        {
            return res.status(404).json({ message: "User not found." });
        }

        // Generate a new MPIN
        const newMPIN = generateMPIN();
        user.MPIN = newMPIN;

        // Save new MPIN to the database
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




