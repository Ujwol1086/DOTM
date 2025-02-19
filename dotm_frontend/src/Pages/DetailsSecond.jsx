import { useState } from "react";
import axios from "axios"; // Make sure to import axios
import AddressForm from "../components/AddressForm";
import DisplayCitizenship from "../components/DisplayCitizenship";

const DetailsSecond = () => {
  // State variables to store form data
  const [applicantData, setApplicantData] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    gender: "",
    bloodGroup: "",
    identityMark: "",
    profession: "",
    education: "",
    trainingInstitute: "",
  });

  const [guardianData, setGuardianData] = useState({
    relationship: "",
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const [addressData, setAddressData] = useState({
    province: "",
    district: "",
    municipality: "",
    wardNo: "",
    tole: "",
    currentprovince: "",
    currentdistrict: "",
    currentmunicipality: "",
    currentwardNo: "",
    currenttole: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine all form data
    const dataToSubmit = {
      ...applicantData,
      ...guardianData,
      ...addressData,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/profile/profile-details",
        dataToSubmit
      );
      console.log(response.data);
      alert("Profile details submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting details");
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          Applicant Portal &gt; Profile
        </h2>

        {/* Applicant Details Section */}
        <div className="mt-4 border rounded-lg p-4 bg-gray-50">
          <h3 className="font-semibold mb-4">
            B. Applicant Details (आवेदकको विवरण)
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  नाम (देवनागरीमा)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="पहिलो नाम​"
                  value={applicantData.FirstName}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      FirstName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  बीचको नाम (देवनागरीमा)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="बीचको नाम"
                  value={applicantData.MiddleName}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      MiddleName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  थर (देवनागरीमा)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="थर"
                  value={applicantData.LastName}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      LastName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Gender (लिङ्ग)
                </label>
                <select
                  className="w-full mt-1 p-2 border rounded"
                  value={applicantData.gender}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      gender: e.target.value,
                    })
                  }
                  required
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Blood Group (रक्त समूह)
                </label>
                <select
                  className="w-full mt-1 p-2 border rounded"
                  value={applicantData.bloodGroup}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      bloodGroup: e.target.value,
                    })
                  }
                  required
                >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Identity Mark (पहिचान चिन्ह)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder=""
                  value={applicantData.identityMark}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      identityMark: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Profession (पेशा)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Engineer"
                  value={applicantData.profession}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      profession: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Education (शिक्षा)
                </label>
                <select
                  className="w-full mt-1 p-2 border rounded"
                  value={applicantData.education}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      education: e.target.value,
                    })
                  }
                  required
                >
                  <option>Undergraduate</option>
                  <option>Graduate</option>
                  <option>Postgraduate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Training Institute (तालिम दिने संस्था)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="SELF-TRAINED"
                  value={applicantData.trainingInstitute}
                  onChange={(e) =>
                    setApplicantData({
                      ...applicantData,
                      trainingInstitute: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Guardian/Witness Information */}
            <div className="mt-6 border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-4">
                C. Guardian / Witness Information (अभिभावक विवरण)
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Relationship (अभिभावकको नाता)
                </label>
                <select
                  className="w-full mt-1 p-2 border rounded"
                  value={guardianData.relationship}
                  onChange={(e) =>
                    setGuardianData({
                      ...guardianData,
                      relationship: e.target.value,
                    })
                  }
                >
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Guardian</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Father First Name (English)
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border rounded"
                    value={guardianData.firstName}
                    onChange={(e) =>
                      setGuardianData({
                        ...guardianData,
                        firstName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Father Middle Name (English)
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border rounded"
                    value={guardianData.middleName}
                    onChange={(e) =>
                      setGuardianData({
                        ...guardianData,
                        middleName: e.target.value,
                      })
                    }
                    placeholder="Middle Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Father Last Name (English)
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border rounded"
                    value={guardianData.lastName}
                    onChange={(e) =>
                      setGuardianData({
                        ...guardianData,
                        lastName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <AddressForm setAddressData={setAddressData} />

            {/* Submit button */}
            <div className="flex justify-center gap-5 mt-6">
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailsSecond;
