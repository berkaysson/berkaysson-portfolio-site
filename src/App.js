import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import ProjectLifemap from "./Components/Projects/lifemap";
import styled from "styled-components";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    <BrowserRouter>
      <AppWrapper>
        <Navigation />
        <MainWrapper>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/project-lifemap" element={<ProjectLifemap />} />
          </Routes>
          <Contact />
        </MainWrapper>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
