import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import ProjectLifemap from "./Components/Projects/lifemap";
import styled from "styled-components";
import Home from "./Components/Home";

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
        <Home />
        <ProjectLifemap />
        <Contact />
      </MainWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default App;
