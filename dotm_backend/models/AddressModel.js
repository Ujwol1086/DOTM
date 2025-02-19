import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Applicant",
        required: true
    },
    province: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    municipality: {
        type: String,
        required: true
    },
    ward: {
        type: Number,
        required: false
    },
    tole: {
        type: String,
        required: true
    },
    currentprovince: {
        type: String,
        required: true
    },
    currentdistrict: {
        type: String,
        required: true
    },
    currentmunicipality: {
        type: String,
        required: true
    },
    currentward: {
        type: Number,
        required: false
    },
    currenttole: {
        type: String,
        required: true
    },
});

const Address = mongoose.model("Address", addressSchema);
export default Address;