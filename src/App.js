import About from "./Components/About";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import styled from "styled-components";

const AppWrapper = styled.div``;

const MainWrapper = styled.main`
  margin-left: 100px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Navigation />
      <MainWrapper>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
