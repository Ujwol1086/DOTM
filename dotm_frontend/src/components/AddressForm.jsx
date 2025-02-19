import { useEffect, useState } from "react";

const AddressForm = ({ setAddressData }) => {
  const [sameAsPermanent, setSameAsPermanent] = useState(false);

  const [addressData, setLocalAddressData] = useState({
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

  const handleAddressChange = (e) => {
    setLocalAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Pass the updated address data to the parent when it changes
    setAddressData && setAddressData(addressData);
  }, [addressData, setAddressData]);

  return (
    <>
      <div className="mt-5 mx-auto p-6 bg-gray-50 shadow-md rounded-lg">
        {/* Permanent Address */}
        <h3 className="text-lg font-semibold mb-2">
          D. Permanent Address (स्थायी ठेगाना)
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Province</label>
            <select
              className="w-full border p-2 rounded"
              name="province"
              value={addressData.province}
              onChange={handleAddressChange}
            >
              <option>Select Province</option>
              <option>Bagmati Province</option>
              <option>Gandaki Province</option>
              <option>Koshi Province</option>
              <option>Madhesh Province</option>
              <option>Lumbini Province</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">District</label>
            <select
              className="w-full border p-2 rounded"
              name="district"
              value={addressData.district}
              onChange={handleAddressChange}
            >
              <option>Select District</option>
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
            <label className="block text-gray-700">
              Rural / Urban Municipality
            </label>
            <select
              className="w-full border p-2 rounded"
              name="municipality"
              value={addressData.municipality}
              onChange={handleAddressChange}
            >
              <option>Select Municipality</option>
              <option>Butwal Municipality</option>
              <option>Tarakeshwor Municipality</option>
              <option>Kushma Municipality</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Ward No.</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              placeholder="Ward"
              name="wardNo"
              value={addressData.wardNo}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Tole</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Tole"
              name="tole"
              value={addressData.tole}
              onChange={handleAddressChange}
            />
          </div>
        </div>

        {/* Current Address */}
        <h3 className="text-lg font-semibold mt-6 mb-2">
          E. Current Address (हालको ठेगाना)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={() => setSameAsPermanent(!sameAsPermanent)}
              />
              <span>Same as Permanent Address</span>
            </label>
          </div>
          <div>
            <label className="block text-gray-700">Province</label>
            <select
              className="w-full border p-2 rounded"
              disabled={sameAsPermanent}
              name="currentprovince"
              value={addressData.currentprovince}
              onChange={handleAddressChange}
            >
              <option>Select Province</option>
              <option>Bagmati Province</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">District</label>
            <select
              className="w-full border p-2 rounded"
              disabled={sameAsPermanent}
              name="currentdistrict"
              value={addressData.currentdistrict}
              onChange={handleAddressChange}
            >
              <option>Select District</option>
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
            <label className="block text-gray-700">
              Rural / Urban Municipality
            </label>
            <select
              className="w-full border p-2 rounded"
              disabled={sameAsPermanent}
              name="currentmunicipality"
              value={addressData.currentmunicipality}
              onChange={handleAddressChange}
            >
              <option>Select Metropolitan</option>
              <option>Kathmandu Metropolitan City</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Ward No.</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Ward"
              disabled={sameAsPermanent}
              name="currentwardNo"
              value={addressData.currentwardNo}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Tole</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Tole"
              disabled={sameAsPermanent}
              name="currenttole"
              value={addressData.currenttole}
              onChange={handleAddressChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
