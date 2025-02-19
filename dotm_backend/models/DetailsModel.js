import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: false
    },
    LastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    citizenshipNo: {
        type: String,
        required: true
    },
    IssuedDistrict: {
        type: String,
        required: true
    },
    IssuedDate: {
        type: Date,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
});

const details = mongoose.model("Detail", detailSchema);
export default details;