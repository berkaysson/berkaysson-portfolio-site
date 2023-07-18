import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Hooks/ScrollToTop";
import AnimatedRoutes from "./Components/AnimatedRoutes";

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
  padding-top: 102px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppWrapper>
        <MainWrapper>
          <AnimatedRoutes />
          <Contact />
        </MainWrapper>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
