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
    gender: {
        type: String,
        required: false
    },
    bloodGroup: {
        type: String,
        required: false,
    },
    identityMark: {
        type: String,
        required: false
    },
    profession: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: false
    },
    trainingInstitute: {
        type: String,
        required: false
    }
});

const Applicant = mongoose.model("Applicant", applicantSchema);
export default Applicant;