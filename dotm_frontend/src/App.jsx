import { Outlet } from "react-router-dom";
import LOGO from "./components/LOGO";

function App() {
  return (
    <>
      <LOGO />
      <Outlet />
    </>
  );
}

export default App;
