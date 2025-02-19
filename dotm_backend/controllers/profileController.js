import Applicant from "../models/ApplicantModel.js";
import Address from "../models/AddressModel.js";
import Guardian from "../models/GuardianModel.js";

export const insertApplicant = async (req, res) =>
{
    try
    {
        // Extract data from the request body
        const {
            FirstName,
            MiddleName,
            LastName,
            gender,
            bloodGroup,
            identityMark,
            profession,
            education,
            trainingInstitute
        } = req.body;

        // Create a new applicant instance
        const newApplicant = new Applicant({
            FirstName,
            MiddleName,
            LastName,
            gender,
            bloodGroup,
            identityMark,
            profession,
            education,
            trainingInstitute
        });

        // Save the new applicant to the database
        await newApplicant.save();

        // Respond with the created applicant
        res.status(201).json({
            message: "Applicant created successfully!",
            applicant: newApplicant
        });
    } catch (error)
    {
        // Handle errors and respond with the error message
        console.error("Error inserting applicant:", error);
        res.status(500).json({
            message: "Error occurred while creating applicant",
            error: error.message
        });
    }
};

export const insertAddress = async (req, res) =>
{
    try
    {
        // Extract data from the request body
        const {
            province,
            district,
            municipality,
            ward,
            tole,
            currentprovince,
            currentdistrict,
            currentmunicipality,
            currentward,
            currenttole
        } = req.body;

        // Create a new address instance
        const newAddress = new Address({
            province,
            district,
            municipality,
            ward,
            tole,
            currentprovince,
            currentdistrict,
            currentmunicipality,
            currentward,
            currenttole
        });

        // Save the new address to the database
        await newAddress.save();

        // Respond with the created address
        res.status(201).json({
            message: "Address created successfully!",
            address: newAddress
        });
    } catch (error)
    {
        // Handle errors and respond with the error message
        console.error("Error inserting address:", error);
        res.status(500).json({
            message: "Error occurred while creating address",
            error: error.message
        });
    }
};

export const insertGuardian = async (req, res) =>
{
    try
    {
        // Extract data from the request body
        const { relationship, firstName, middleName, lastName } = req.body;

        // Create a new guardian instance
        const newGuardian = new Guardian({
            relationship,
            firstName,
            middleName,
            lastName
        });

        // Save the new guardian to the database
        await newGuardian.save();

        // Respond with the created guardian
        res.status(201).json({
            message: "Guardian created successfully!",
            guardian: newGuardian
        });
    } catch (error)
    {
        // Handle errors and respond with the error message
        console.error("Error inserting guardian:", error);
        res.status(500).json({
            message: "Error occurred while creating guardian",
            error: error.message
        });
    }
};