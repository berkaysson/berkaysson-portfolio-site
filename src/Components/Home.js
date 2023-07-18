import { theme } from "../Styles/theme";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={theme.framerAnimations.pageTransition.initial}
      animate={theme.framerAnimations.pageTransition.animate}
      exit={theme.framerAnimations.pageTransition.exit}
      transition={theme.framerAnimations.pageTransition.transition}
    >
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
