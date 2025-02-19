import Detail from "../models/DetailsModel.js"; // Import the model

// Controller to insert user details
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
            Email
        } = req.body;

        // Validate required fields
        if (!FirstName || !LastName || !dob || !citizenshipNo || !IssuedDistrict || !IssuedDate || !Email)
        {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        // Create a new detail document
        const newDetail = new Detail({
            FirstName,
            MiddleName,
            LastName,
            dob,
            citizenshipNo,
            IssuedDistrict,
            IssuedDate,
            Email
        });

        // Save to database
        await newDetail.save();

        return res.status(201).json({ message: "Details inserted successfully.", data: newDetail });
    } catch (error)
    {
        console.error("Error inserting details:", error.message);
        return res.status(500).json({ message: "An error occurred while inserting details." });
    }
};
