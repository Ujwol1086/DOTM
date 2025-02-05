import mongoose from "mongoose";

const mpinSchema = new mongoose.Schema({
    MPIN: {
        type: Number,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    }
});

const MPIN = mongoose.model("MPIN", mpinSchema);
export default MPIN;
