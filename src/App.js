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
  color: ${({ theme }) => theme.colors.lightest};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darker};
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  overflow-x: hidden;
  max-width: 1500px;
`;

const App = () => {
  const [mouseFollowerText, setMouseFollowerText] = useState("");
  const [mouseFollowerType, setMouseFollowerType] = useState(false);
  const { target } = useMousePosition();
  const lifemapImgRef = useRef();
  const lifemapContentRef = useRef();
  const dhondtAppImgRef = useRef();
  const dhondtAppContentRef = useRef();
  const { width: screenWidth } = useScreenSize();

  useEffect(() => {
    if (target === lifemapImgRef.current) {
      setMouseFollowerText("PREVIEW");
      setMouseFollowerType({ type: "img", project: "lifemap" });
    } else if (target === lifemapContentRef.current) {
      setMouseFollowerText("DETAILS");
      setMouseFollowerType({ type: "content", project: "lifemap" });
    } else if (target === dhondtAppImgRef.current) {
      setMouseFollowerText("PREVIEW");
      setMouseFollowerType({ type: "img", project: "dhondtApp" });
    } else if (target === dhondtAppContentRef.current) {
      setMouseFollowerText("DETAILS");
      setMouseFollowerType({ type: "content", project: "dhondtApp" });
    } else {
      setMouseFollowerType(false);
    }
  }, [target]);

  return (
    <>
      <MouseTooltip
        children={
          <MouseFollower
            text={mouseFollowerText}
            mouseFollowerType={mouseFollowerType}
            visible={mouseFollowerType}
            screenWidth={screenWidth}
          />
        }
      />

      <BrowserRouter>
        <ScrollToTop />
        <AppWrapper>
          <MainWrapper>
            <Navigation />
            <AnimatedRoutes
              lifemapImgRef={lifemapImgRef}
              lifemapContentRef={lifemapContentRef}
              dhondtAppImgRef={dhondtAppImgRef}
              dhondtAppContentRef={dhondtAppContentRef}
              screenWidth={screenWidth}
            />
          </MainWrapper>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
