import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import ProjectLifemap from "./Projects/lifemap";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Home />} />
        <Route path="/project-lifemap" element={<ProjectLifemap />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
