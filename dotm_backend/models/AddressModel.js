import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
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
        required: true
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
        required: true
    },
    currenttole: {
        type: String,
        required: true
    },
});

const Address = mongoose.model("Address", addressSchema);
export default Address;