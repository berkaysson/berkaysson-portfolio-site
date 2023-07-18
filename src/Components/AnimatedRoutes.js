import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import ProjectLifemap from "./Projects/lifemap";

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/project-lifemap" element={<ProjectLifemap />} />
    </Routes>
  );
};

export default AnimatedRoutes;
