import img from "./../../../Images/emblem_of_Nepal.png";

const LOGO = () => {
  return (
    <>
      {/* Logo */}
      <div className="flex justify-center items-center p-2 mt-5 mb-5 gap-5">
        <img src={img} alt="Emblem of Nepal" className="w-28" />
        <ul className="list-none">
          <li className="font-medium">Government of Nepal</li>
          <li className="text-[14px] text-blue-600 font-bold">
            Ministry of Physical Infrastructure and Transport
          </li>
          <li className="text-[16px] font-bold">
            Department of Transport Management
          </li>
          <li className="text-[18px] text-red-600 font-bold">
            Online Driving License System
          </li>
        </ul>
      </div>
    </>
  );
};

export default LOGO;
