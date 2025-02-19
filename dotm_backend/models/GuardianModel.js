import mongoose from "mongoose";

const guardianSchema = new mongoose.Schema({

    relationship: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
});

const Guardian = mongoose.model("Guardian", guardianSchema);
export default Guardian;
