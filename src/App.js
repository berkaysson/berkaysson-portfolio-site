import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Hooks/ScrollToTop";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navigation from "./Components/Navigation";
import useMousePosition from "./Hooks/useMousePosition.js";
import MouseTooltip from "./Hooks/MouseToolTip";
import MouseFollower from "./Components/MouseFollower";
import { useEffect, useRef, useState } from "react";

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
  const [mouseFollowerText, setMouseFollowerText] = useState("");
  const { targetID: onMouseTarget, target } = useMousePosition();
  const projectContentRef = useRef();
  const isMouseOverProjectContent = projectContentRef.current?.contains(target);
  
  useEffect(()=>{
    if(onMouseTarget === "lifemapImg") setMouseFollowerText("PREVIEW");
    else if(isMouseOverProjectContent) setMouseFollowerText("DETAILS");
  }, [isMouseOverProjectContent, onMouseTarget]);

  return (
    <>
      <MouseTooltip
        children={
          <MouseFollower
            text={mouseFollowerText}
            visible={onMouseTarget === "lifemapImg" || isMouseOverProjectContent}
          />
        }
      />

      <BrowserRouter>
        <ScrollToTop />
        <AppWrapper>
          <MainWrapper>
            <Navigation />
            <AnimatedRoutes projectContentRef={projectContentRef} />
          </MainWrapper>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
