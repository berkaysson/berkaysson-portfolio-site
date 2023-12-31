import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useScroll as framerUseScroll,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { theme } from "../../Styles/theme";
import { NavigationWrapper, NavigationMenuWrapper } from "./NavigationStyles";
import { GlassCardWrapper } from "../Wrappers/Effects/GlassCardWrapper";
import { styled } from "styled-components";
import BerkaySonelLogo from './../../Images/BerkaySonelLogo';

const NavigationContainer = styled(motion.div)`
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 3;
  margin: 1rem;
  padding: 1rem;
  
  svg{
    transition: transform 0.1s;
    &:hover{
      transform: scale(1.1);
    }
  }

  @media (max-width: 425px){
    margin: 0;
    padding: 0rem;
    width: 100%;
  }
`;

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = framerUseScroll();
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 99 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  });

  return (
    <NavigationContainer
      currentPath={currentPath}
      variants={theme.framerAnimations.navTransition}
      animate={hidden ? "hidden" : "visible"}
      exit={"exit"}
      transition={theme.framerAnimations.navTransition.transition}
    >
      <GlassCardWrapper>
        <NavigationWrapper>
          <Link to="/" className="logo">
            <BerkaySonelLogo />
          </Link>
          <NavigationMenuWrapper>
            {currentPath === "/" ? (
              <>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="https://github.com/berkaysson" target="_blank" rel="noreferrer">GitHub</a>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <a href="https://github.com/berkaysson" target="_blank" rel="noreferrer">GitHub</a>
              </>
            )}
          </NavigationMenuWrapper>
        </NavigationWrapper>
      </GlassCardWrapper>
    </NavigationContainer>
  );
};

export default Navigation;
