import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./auth/Login.jsx";
import DetailsFirst from "./Pages/DetailsFirst.jsx";
import DetailsSecond from "./Pages/DetailsSecond.jsx";
import DisplayCitizenship from "./components/DisplayCitizenship.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Login />} />
      <Route path="/details" element={<DetailsFirst />} />
      <Route path="/profile" element={<DetailsSecond />} />
      <Route path="/display-details" element={<DisplayCitizenship />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
