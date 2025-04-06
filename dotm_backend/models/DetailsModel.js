import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({

    applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Applicant",
        required: true
    },

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
    },
});

const details = mongoose.model("Detail", detailSchema);
export default details;