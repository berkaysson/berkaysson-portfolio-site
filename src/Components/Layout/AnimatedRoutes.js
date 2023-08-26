import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Sections/Home";
import ProjectLifemap from "../Projects/lifemap";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = ({
  lifemapImgRef,
  lifemapContentRef,
  dhondtAppImgRef,
  dhondtAppContentRef,
  screenWidth,
}) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          index
          element={
            <Home
              screenWidth={screenWidth}
              lifemapImgRef={lifemapImgRef}
              lifemapContentRef={lifemapContentRef}
              dhondtAppImgRef={dhondtAppImgRef}
              dhondtAppContentRef={dhondtAppContentRef}
            />
          }
        />
        <Route path="/project-lifemap" element={<ProjectLifemap />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
