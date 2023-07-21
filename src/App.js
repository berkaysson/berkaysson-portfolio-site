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
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  background-color: transparent;
  backdrop-filter: blur(10px) contrast(1.5);
  border-radius: 50%;
  pointer-events: none;

  &::after{
    font-size: 12px;
    text-shadow: 0 0 5px gray;
    position: absolute;
    top: 33%;
    left: 8%;
    color: lightpink;
    content: "PREVIEW";
  }
`;

const App = () => {
  const { target: onMouseTarget } = useMousePosition();
  return (
    <>
      <MouseTooltip
        visible={onMouseTarget === "lifemapImg"}
        children={<MouseFollower />}
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
