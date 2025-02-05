import twilio from "twilio"; // or any other SMS service provider you use

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = (phoneNumber, message) =>
{
    return client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER, // your Twilio phone number
        to: phoneNumber
    });
};
