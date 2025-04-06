import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({

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

const Applicant = mongoose.model("Applicant", applicantSchema);
export default Applicant;