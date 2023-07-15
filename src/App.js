import About from "./Components/About";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import styled from "styled-components";

const AppWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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
