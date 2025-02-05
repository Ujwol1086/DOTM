const DisplayCitizenship = () => {
  return (
    <>
      {/* Upload Citizenship */}
      <div className="mt-6 border rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold mb-4">
          F. Citizenship Certificate (नागरिकता प्रमाणपत्र)
        </h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Front Side of Citizenship (नागरिकताको अगाडिको भाग)
              </label>
              <input type="file" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Back Side of Citizenship (नागरिकताको पछाडीको भाग )
              </label>
              <input
                type="file"
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* display Citizenship */}
          <div className="mt-5">
            <h4 className="font-semibold mb-4">
              CIMS Details from MOHA (नागरिकताको ):
            </h4>

            <p className="text-red-500 font-semibold ">
              Note: Following Details are found from Citizenship Information
              Management System of Ministry of Home Affairs (MOHA) as per your
              citizenship details entered into previous page. If the details are
              not correct as pre your citizenship correct them in you District
              Administration Office.
            </p>
            <div className="mt-4 grid grid-cols-4 mb-4 gap-5">
              <div>
                <label className="font-semibold">First Name:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Gender:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Date of Birth(AD):</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Date of Birth(BS):</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Father Name:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Citizenship No.:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">District:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">VDC/Municipality:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Birth District:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Birth Wardno:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Citizen Type:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Issued Date:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Issued By:</label>
                <span></span>
              </div>
              <div>
                <label className="font-semibold">Issued office:</label>
                <span></span>
              </div>
            </div>
            <hr />
            <div>
              <h3>A. Citizenship details entered into the previous page ()</h3>
              <div className="mt-4 grid grid-cols-4 gap-5">
                <div>
                  <label className="font-semibold">First Name:</label>
                  <span></span>
                </div>
                <div>
                  <label className="font-semibold">Middle Name:</label>
                  <span></span>
                </div>
                <div>
                  <label className="font-semibold">Last Name:</label>
                  <span></span>
                </div>
                <div>
                  <label className="font-semibold">Date of Birth(BS):</label>
                  <span></span>
                </div>
                <div>
                  <label className="font-semibold">Citizenship No.:</label>
                  <span></span>
                </div>
                <div>
                  <label className="font-semibold">Issued District:</label>
                  <span></span>
                </div>
                <div>
                  <label className="font-semibold">Issued Date BS:</label>
                  <span></span>
                </div>
                <div>
                  <label className="font-semibold">Email:</label>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DisplayCitizenship;
