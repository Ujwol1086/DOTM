const Upload = () => {
  return (
    <>
      {/* Guardian/Witness Information */}
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
        </form>
      </div>
    </>
  );
};

export default Upload;
