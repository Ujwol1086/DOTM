import Applicant from "../models/ApplicantModel.js";
import Address from "../models/AddressModel.js";
import Guardian from "../models/GuardianModel.js";
import details from "../models/DetailsModel.js";

export const insertProfileDetails = async (req, res) =>
{
    try
    {
        const {
            // Applicant Data
            FirstName, MiddleName, LastName, gender, bloodGroup,
            identityMark, profession, education, trainingInstitute,

            // Address Data
            province, district, municipality, wardNo, tole,
            currentprovince, currentdistrict, currentmunicipality,
            currentwardNo, currenttole,

            // Guardian Data
            relationship, firstName, middleName, lastName
        } = req.body;

        // Insert Applicant Data
        const newApplicant = new Applicant({
            FirstName, MiddleName, LastName, gender, bloodGroup,
            identityMark, profession, education, trainingInstitute
        });
        await newApplicant.save();

        // Insert Address Data
        const newAddress = new Address({
            province, district, municipality, wardNo, tole,
            currentprovince, currentdistrict, currentmunicipality,
            currentwardNo, currenttole
        });
        await newAddress.save();

        // Insert Guardian Data
        const newGuardian = new Guardian({
            relationship, firstName, middleName, lastName
        });
        await newGuardian.save();

        // Send a success response
        res.status(201).json({
            message: "Profile details saved successfully!",
            applicant: newApplicant,
            address: newAddress,
            guardian: newGuardian
        });

    } catch (error)
    {
        console.error("Error inserting profile details:", error);
        res.status(500).json({
            message: "Error occurred while saving profile details",
            error: error.message
        });
    }
};

export const getProfileDetails = async (req, res) =>
{
    try
    {
        const { id } = req.params;

        // Find the applicant by ID
        const applicant = await Applicant.findById(id);
        if (!applicant)
        {
            return res.status(404).json({ message: "Applicant not found" });
        }

        // Find associated address, guardian, and citizenship details
        const address = await Address.findOne({ applicantId: id });
        const guardian = await Guardian.findOne({ applicantId: id });
        const detail = await details.findOne({ applicantId: id });

        // Combine all data into a single response
        res.status(200).json({
            applicant,
            address,
            guardian,
            detail
        });

    } catch (error)
    {
        console.error("Error fetching profile details:", error);
        res.status(500).json({ message: "Error retrieving details" });
    }
};