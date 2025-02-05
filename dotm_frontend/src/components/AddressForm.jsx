import { useState } from "react";

const AddressForm = () => {
  const [sameAsPermanent, setSameAsPermanent] = useState(false);

  return (
    <>
      <div className="mt-5 mx-auto p-6 bg-gray-50 shadow-md rounded-lg">
        {/* Permanent Address */}
        <h3 className="text-lg font-semibold mb-2">
          D. Permanent Address (स्थायी ठेगाना)
        </h3>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Province</label>
              <select className="w-full border p-2 rounded">
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
              <select className="w-full border p-2 rounded">
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
              <select className="w-full border p-2 rounded">
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
              />
            </div>
            <div>
              <label className="block text-gray-700">Tole</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="Tole"
              />
            </div>
          </div>
        </form>

        {/* Current Address */}
        <h3 className="text-lg font-semibold mt-6 mb-2">
          E. Current Address (हालको ठेगाना)
        </h3>
        <form>
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
              >
                <option>Bagmati Province</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">District</label>
              <select
                className="w-full border p-2 rounded"
                disabled={sameAsPermanent}
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
              />
            </div>
            <div>
              <label className="block text-gray-700">Tole</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="Tole"
                disabled={sameAsPermanent}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressForm;
