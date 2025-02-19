import { useState } from "react";
import AddressForm from "./AddressForm";

const ParentComponent = () => {
  const [addressData, setAddressData] = useState({});

  return <AddressForm setAddressData={setAddressData} />;
};

export default ParentComponent;
