import Login from "../models/User.js";
import MPIN from "../models/MPIN.js";
import { sendSMS } from "../utils/smsService.js"; // assuming you have an SMS sending utility

const generateMPIN = () =>
{
    return Math.floor(100000 + Math.random() * 900000); // generates a 6-digit MPIN
};

const loginController = async (req, res) =>
{
    const { PhoneNumber, captcha } = req.body;

    try
    {
        // Check if the phone number already exists in the database
        const existingUser = await Login.findOne({ PhoneNumber });
        if (existingUser)
        {
            return res.status(400).json({ message: "Phone number already registered." });
        }

        // Create a new user
        const newUser = new Login({
            PhoneNumber,
            captcha
        });

        // Generate MPIN
        const mpin = generateMPIN();
        const newMPIN = new MPIN({
            MPIN: mpin,
            PhoneNumber
        });

        // Save MPIN to database
        await newMPIN.save();

        // Save the MPIN reference in the user document
        newUser.mpin = newMPIN._id;
        await newUser.save();

        // Send MPIN to the phone number
        await sendSMS(PhoneNumber, `Your MPIN is: ${mpin}`);

        return res.status(200).json({ message: "MPIN sent successfully." });
    } catch (error)
    {
        console.log(error.message);
        return res.status(500).json({ message: "An error occurred." });
    }
};

export default loginController;
