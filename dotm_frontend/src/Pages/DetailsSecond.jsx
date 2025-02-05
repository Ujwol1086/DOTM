import AddressForm from "../components/AddressForm";
import DisplayCitizenship from "../components/DisplayCitizenship";

const DetailsSecond = () => {
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  नाम (देवनागरीमा)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="पहिलो नाम​"
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
                />
              </div>
              <div>
                <label className="block text-sm font-medium" required>
                  थर (देवनागरीमा)
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="थर"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Gender (लिङ्ग)
                </label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Blood Group (रक्त समूह)
                </label>
                <select className="w-full mt-1 p-2 border rounded" required>
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
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Education (शिक्षा)
                </label>
                <select className="w-full mt-1 p-2 border rounded">
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
                />
              </div>
            </div>
          </form>
        </div>

        {/* Guardian/Witness Information */}
        <div className="mt-6 border rounded-lg p-4 bg-gray-50">
          <h3 className="font-semibold mb-4">
            C. Guardian / Witness Information (अभिभावक विवरण)
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Relationship (अभिभावकको नाता)
              </label>
              <select className="w-full mt-1 p-2 border rounded">
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
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <AddressForm />
        <hr />
        <DisplayCitizenship />
        {/* button */}
        <div className="flex justify-center gap-5 mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Back
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsSecond;
