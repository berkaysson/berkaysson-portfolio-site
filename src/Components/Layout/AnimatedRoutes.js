import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Sections/Home";
import ProjectLifemap from "../Projects/lifemap";
import { AnimatePresence } from "framer-motion";
import ProjectDhondtApp from "../Projects/DhondtApp";
import ProjectHarmonii from "../Projects/harmonii";

const AnimatedRoutes = ({
  lifemapImgRef,
  lifemapContentRef,
  dhondtAppImgRef,
  dhondtAppContentRef,
  harmoniiImgRef,
  harmoniiContentRef,
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
              harmoniiImgRef={harmoniiImgRef}
              harmoniiContentRef={harmoniiContentRef}
            />
          }
        />
        <Route path="/project-lifemap" element={<ProjectLifemap />} />
        <Route path="/project-dhondtApp" element={<ProjectDhondtApp />} />
        <Route path="/project-harmonii" element={<ProjectHarmonii />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
