import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Hooks/ScrollToTop";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navigation from "./Components/Navigation";
import useMousePosition from "./Hooks/useMousePosition.js";
import MouseTooltip from "./Hooks/MouseToolTip";

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

const MouseFollower = styled.div`
  width: 62px;
  height: 62px;
  transform: translate(-50%, -70%);
  background-color: transparent;
  backdrop-filter: blur(10px) contrast(1.5);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.2s;
  opacity: ${({ onMouseTarget }) => (onMouseTarget ? 1 : 0)};

  &::after {
    font-size: 12px;
    text-shadow: 0 0 1px black;
    position: absolute;
    top: 35%;
    left: 9%;
    color: #abc4ff;
    content: "PREVIEW";
  }
`;

const App = () => {
  const { target: onMouseTarget } = useMousePosition();
  return (
    <>
      <MouseTooltip
        children={
          <MouseFollower onMouseTarget={onMouseTarget === "lifemapImg"} />
        }
      />

      <BrowserRouter>
        <ScrollToTop />
        <AppWrapper>
          <MainWrapper>
            <Navigation />
            <AnimatedRoutes />
          </MainWrapper>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
