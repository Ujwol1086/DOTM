import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailsFirst = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    dob: "",
    citizenshipNo: "",
    IssuedDistrict: "",
    IssuedDate: "",
    Email: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/details/insert-details",
        formData
      );
      alert(response.data.message);
      setSuccess("Details submitted successfully!");
      setFormData({
        FirstName: "",
        MiddleName: "",
        LastName: "",
        dob: "",
        citizenshipNo: "",
        IssuedDistrict: "",
        IssuedDate: "",
        Email: "",
      });
      navigate("/profile");
    } catch (error) {
      setError("Failed to submit details. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-[80%] mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-2">
        Enter your Personal Details
      </h2>
      <p className="text-red-600 text-sm font-medium">
        (Please Check and enter your details correctly. You will not be allowed
        to modify the details later.)
      </p>
      <div className="mt-4 border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold mb-4">
          A. Citizenship Details (नागरिकताको विवरण)
        </h3>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                First Name in English (पहिलो नाम)
              </label>
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Middle Name in English (बीचको नाम)
              </label>
              <input
                type="text"
                name="MiddleName"
                value={formData.MiddleName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Middle Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Last Name in English (थर)
              </label>
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Date of Birth (B.S) (जन्म मिति बि.स.)
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Citizenship No. (नागरिकता नं.)
              </label>
              <input
                type="text"
                name="citizenshipNo"
                value={formData.citizenshipNo}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Issued District (जारी जिल्ला)
              </label>
              <select
                name="IssuedDistrict"
                value={formData.IssuedDistrict}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                required
              >
                <option value="">Select District</option>
                <option value="Kathmandu">Kathmandu</option>
                <option value="Parbat">Parbat</option>
                <option value="Jhapa">Jhapa</option>
                <option value="Khotang">Khotang</option>
                <option value="Solukhumbhu">Solukhumbhu</option>
                <option value="Parsa">Parsa</option>
                <option value="Dhanusa">Dhanusa</option>
                <option value="Kavrepalanchowk">Kavrepalanchowk</option>
                <option value="Chitwan">Chitwan</option>
                <option value="Baglung">Baglung</option>
                <option value="Gorkha">Gorkha</option>
                <option value="Manang">Manang</option>
                <option value="Mustang">Mustang</option>
                <option value="Myagdi">Myagdi</option>
                <option value="Lamjung">Lamjung</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Issued Date (जारी मिति)
              </label>
              <input
                type="date"
                name="IssuedDate"
                value={formData.IssuedDate}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email (इमेल)</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsFirst;
