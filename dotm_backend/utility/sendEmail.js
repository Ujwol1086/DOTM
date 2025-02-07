import nodemailer from "nodemailer";
import User from "../models/loginModel.js"; // Import User model

const sendEmail = async (PhoneNumber, Email, MPIN) =>
{
    try
    {
        let userEmail = Email;
        let userMPIN = MPIN;

        // If Email or MPIN is not provided, try fetching from the database
        if (!userEmail || !userMPIN)
        {
            const user = await User.findOne({ PhoneNumber });

            if (!user)
            {
                console.error("User not found.");
                return { success: false, message: "User not found." };
            }

            if (!user.Email)
            {
                console.error("User email is missing.");
                return { success: false, message: "User email is missing." };
            }

            userEmail = user.Email;
            userMPIN = user.MPIN;
        }

        const transporter = nodemailer.createTransport({
            service: "gmail", // Use your email provider
            auth: {
                user: "ujwolaryal@gmail.com", // Replace with your email
                pass: "ikfu qpys zunr bham"  // Replace with your app password
            }
        });

        const mailOptions = {
            from: "ujwolaryal@gmail.com",
            to: userEmail, // Use the provided or retrieved email
            subject: "Your MPIN",
            text: `Your MPIN is: ${userMPIN}`
        };

        await transporter.sendMail(mailOptions);
        console.log(`MPIN sent successfully to: ${userEmail}`);

        return { success: true, message: "Email sent successfully." };
    } catch (error)
    {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
    }
};

export default sendEmail;
