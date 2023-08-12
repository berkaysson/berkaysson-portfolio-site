import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Hooks/ScrollToTop";
import AnimatedRoutes from "./Components/Layout/AnimatedRoutes";
import Navigation from "./Components/Navigation/Navigation";
import useMousePosition from "./Hooks/useMousePosition.js";
import MouseTooltip from "./Hooks/MouseToolTip";
import MouseFollower from "./Components/MouseFollower";
import { useEffect, useRef, useState } from "react";
import useScreenSize from "./Hooks/useScreenSize";

const AppWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const App = () => {
  const [mouseFollowerText, setMouseFollowerText] = useState("");
  const [mouseFollowerType, setMouseFollowerType] = useState("");
  const { targetID: onMouseTarget, target } = useMousePosition();
  const projectContentRef = useRef();
  const isMouseOverProjectContent = projectContentRef.current?.contains(target);
  const { width: screenWidth } = useScreenSize();

  useEffect(() => {
    if (onMouseTarget === "lifemapImg") {
      setMouseFollowerText("PREVIEW");
      setMouseFollowerType("lifemapImg");
    } else if (isMouseOverProjectContent) {
      setMouseFollowerText("DETAILS");
      setMouseFollowerType("lifemapContent");
    }
  }, [isMouseOverProjectContent, onMouseTarget]);

  return (
    <>
      {screenWidth <= 1024 ? (
        ""
      ) : (
        <MouseTooltip
          children={
            <MouseFollower
              text={mouseFollowerText}
              mouseFollowerType={mouseFollowerType}
              visible={
                onMouseTarget === "lifemapImg" || isMouseOverProjectContent
              }
              screenWidth={screenWidth}
            />
          }
        />
      )}

      <BrowserRouter>
        <ScrollToTop />
        <AppWrapper>
          <MainWrapper>
            <Navigation />
            <AnimatedRoutes
              projectContentRef={projectContentRef}
              screenWidth={screenWidth}
            />
          </MainWrapper>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
