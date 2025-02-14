import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    MPIN: {
        type: Number,
        required: true
    }
});

const user = mongoose.model("User", loginSchema);
export default user;
