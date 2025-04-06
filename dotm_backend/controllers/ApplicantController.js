import Applicant from "../models/ApplicantModel.js"; // Ensure this is the correct model for personal data

export const insertDetails = async (req, res) =>
{
    try
    {
        const {
            FirstName,
            MiddleName,
            LastName,
            dob,
            citizenshipNo,
            IssuedDistrict,
            IssuedDate,
            Email,
        } = req.body;

        // Validation (ensure fields are provided)
        if (!FirstName || !LastName || !dob || !citizenshipNo || !IssuedDistrict || !IssuedDate || !Email)
        {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        // Create a new applicant entry (store personal information)
        const newApplicant = new Applicant({
            FirstName,
            MiddleName,
            LastName,
            dob,
            citizenshipNo,
            IssuedDistrict,
            IssuedDate,
            Email,
        });

        // Save to database
        await newApplicant.save();

        return res.status(201).json({
            message: "Personal details submitted successfully.",
            applicantId: newApplicant._id,
        });

    } catch (error)
    {
        console.error("Error inserting personal details:", error.message);
        return res.status(500).json({ message: "An error occurred while inserting personal details." });
    }
};
