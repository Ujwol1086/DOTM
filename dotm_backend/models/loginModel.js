import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    captcha: {
        type: String,
        required: true
    },
    mpin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MPIN"
    }
});

const user = mongoose.model("User", loginSchema);
export default user;
