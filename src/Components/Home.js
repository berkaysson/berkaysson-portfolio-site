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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
