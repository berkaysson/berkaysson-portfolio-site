import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Hooks/ScrollToTop";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navigation from "./Components/Navigation";

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
          <Navigation />
          <AnimatedRoutes />
        </MainWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
