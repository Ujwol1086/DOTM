import User from "../models/loginModel.js";
import sendEmail from "../utility/sendEmail.js"; // Import email sending function

const generateMPIN = () =>
{
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit MPIN
};

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

        console.log(mpin)
        console.log(Email)

        const newUser = new User({
            PhoneNumber,
            Email,
            MPIN: mpin // Save MPIN directly in the User model
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

export default loginController;
