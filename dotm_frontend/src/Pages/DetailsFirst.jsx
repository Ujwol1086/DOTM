const DetailsFirst = () => {
  return (
    <>
      <div className="w-[80%] mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          Enter your Personal Details
        </h2>
        <p className="text-red-600 text-sm font-medium">
          (Please Check and enter your details correctly. You will not be
          allowed to modify the details later.)
        </p>
        <div className="mt-4 border rounded-lg p-4 bg-gray-50">
          <h3 className="font-semibold mb-4">
            A. Citizenship Details (नागरिकताको विवरण)
          </h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  First Name in English (पहिलो नाम)
                </label>
                <input
                  type="text"
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
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Issued District (जारी जिल्ला)
                </label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option>Issued District</option>
                  <option>Kathmandu</option>
                  <option>Parbat</option>
                  <option>Jhapa</option>
                  <option>Khotang</option>
                  <option>Solukhumbhu</option>
                  <option>Parsa</option>
                  <option>Dhanusa</option>
                  <option>Kavrepalanchowk</option>
                  <option>Chitwan</option>
                  <option>Baglung</option>
                  <option>Gorkha</option>
                  <option>Manang</option>
                  <option>Mustang</option>
                  <option>Myagdi</option>
                  <option>Lamjung</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Issued Date (जारी मिति)
                </label>
                <input
                  type="date"
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email (इमेल)
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Back
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailsFirst;
