import { theme } from "../../Styles/theme";
import HidingDiv from "../Wrappers/Effects/HidingDiv";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects-Section/Projects-Section";
import Skills from "./Skills/Skills";
import { motion } from "framer-motion";

const Home = ({
  lifemapImgRef,
  lifemapContentRef,
  dhondtAppImgRef,
  dhondtAppContentRef,
  harmoniiImgRef,
  harmoniiContentRef,
  screenWidth,
}) => {
  return (
    <motion.div
      initial={theme.framerAnimations.pageTransition.initial}
      animate={theme.framerAnimations.pageTransition.animate}
      exit={theme.framerAnimations.pageTransition.exit}
      transition={theme.framerAnimations.pageTransition.transition}
    >
      <About />
      <Projects
        lifemapImgRef={lifemapImgRef}
        lifemapContentRef={lifemapContentRef}
        dhondtAppImgRef={dhondtAppImgRef}
        dhondtAppContentRef={dhondtAppContentRef}
        harmoniiImgRef={harmoniiImgRef}
        harmoniiContentRef={harmoniiContentRef}
        screenWidth={screenWidth}
      />
      <Skills />
      <HidingDiv id={"homeHideDiv"}>
        <Contact />
        <Footer />
      </HidingDiv>
    </motion.div>
  );
};

export default Home;
