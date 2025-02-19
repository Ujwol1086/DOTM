import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DisplayCitizenship = () => {
  const { id } = useParams(); // Get the user ID from URL params
  const [citizenshipData, setCitizenshipData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCitizenshipData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/profile-details/${id}`
        );
        setCitizenshipData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCitizenshipData();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading details...</p>;
  }

  if (!citizenshipData) {
    return <p className="text-center text-red-500">No details found.</p>;
  }

  return (
    <div className="w-[80%] mx-auto mt-6 border rounded-lg p-4 bg-gray-50">
      <h4 className="font-semibold mb-4">
        CIMS Details from MOHA (नागरिकताको विवरण):
      </h4>

      <p className="text-red-500 font-semibold">
        Note: The following details are fetched from the Citizenship Information
        Management System. If incorrect, visit your District Administration
        Office for correction.
      </p>

      <div className="mt-4 grid grid-cols-4 mb-4 gap-5">
        <div>
          <label className="font-semibold">First Name:</label>
          <span> {citizenshipData.FirstName} </span>
        </div>
        <div>
          <label className="font-semibold">Gender:</label>
          <span> {citizenshipData.gender} </span>
        </div>
        <div>
          <label className="font-semibold">Date of Birth (AD):</label>
          <span> {citizenshipData.dateOfBirthAD} </span>
        </div>
        <div>
          <label className="font-semibold">Date of Birth (BS):</label>
          <span> {citizenshipData.dateOfBirthBS} </span>
        </div>
        <div>
          <label className="font-semibold">Father Name:</label>
          <span> {citizenshipData.fatherName} </span>
        </div>
        <div>
          <label className="font-semibold">Citizenship No.:</label>
          <span> {citizenshipData.citizenshipNo} </span>
        </div>
        <div>
          <label className="font-semibold">District:</label>
          <span> {citizenshipData.district} </span>
        </div>
        <div>
          <label className="font-semibold">VDC/Municipality:</label>
          <span> {citizenshipData.municipality} </span>
        </div>
      </div>

      <hr />

      <h3>A. Citizenship details entered into the previous page:</h3>
      <div className="mt-4 grid grid-cols-4 gap-5">
        <div>
          <label className="font-semibold">First Name:</label>
          <span> {citizenshipData.FirstName} </span>
        </div>
        <div>
          <label className="font-semibold">Middle Name:</label>
          <span> {citizenshipData.MiddleName} </span>
        </div>
        <div>
          <label className="font-semibold">Last Name:</label>
          <span> {citizenshipData.LastName} </span>
        </div>
        <div>
          <label className="font-semibold">Date of Birth (BS):</label>
          <span> {citizenshipData.dateOfBirthBS} </span>
        </div>
        <div>
          <label className="font-semibold">Citizenship No.:</label>
          <span> {citizenshipData.citizenshipNo} </span>
        </div>
        <div>
          <label className="font-semibold">Issued District:</label>
          <span> {citizenshipData.issuedDistrict} </span>
        </div>
        <div>
          <label className="font-semibold">Issued Date BS:</label>
          <span> {citizenshipData.issuedDateBS} </span>
        </div>
        <div>
          <label className="font-semibold">Email:</label>
          <span> {citizenshipData.email} </span>
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-6">
        <Link to={"/"} className="px-4 py-2 bg-blue-600 text-white rounded">
          Back
        </Link>
        <Link to={"/"} className="px-4 py-2 bg-blue-600 text-white rounded">
          Next
        </Link>
      </div>
    </div>
  );
};

export default DisplayCitizenship;
