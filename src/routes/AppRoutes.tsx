import { Router, Routes } from "react-router-dom";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Routes path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
