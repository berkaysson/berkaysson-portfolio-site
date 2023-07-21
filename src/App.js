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
  background-color: transparent;
  backdrop-filter: blur(10px) contrast(1.5);
  border-radius: 50%;
  pointer-events: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #abc4ff;
  text-shadow: 0 0 1px black;
  transition: opacity 0.2s, transform 0.8s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible
      ? "scale(1) translate(-50%, -70%)"
      : "scale(0.5) translate(-50%, -70%)"};

  &::before {
    position: absolute;
    content: "";
    background-color: black;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    z-index: -1;
  }
`;

const App = () => {
  const { target: onMouseTarget } = useMousePosition();
  return (
    <>
      <MouseTooltip
        children={
          <MouseFollower
            visible={onMouseTarget === "lifemapImg"}
            onMouseTarget={onMouseTarget}
          >
            PREVIEW
          </MouseFollower>
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
