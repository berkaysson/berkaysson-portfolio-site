import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll as framerUseScroll, useMotionValueEvent } from "framer-motion";
import { theme } from "../Styles/theme";

const NavigationWrapper = styled(motion.div)`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  border: 1px solid red;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: ${({ currentPath }) =>
    currentPath === "/project-lifemap" ? "center" : "space-between"};
  opacity: 1;
  transition: ${({ theme }) => theme.transitions.main};

  .logo {
    padding: 0 ${({ theme }) => theme.sizes.sl};
    img {
      margin: auto ${({ theme }) => theme.sizes.sl};
      width: ${({ theme }) => theme.sizes.xlg};
      height: auto;
    }
  }
`;

const NavigationMenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xlg};
  margin-right: ${({ theme }) => theme.sizes.xlg};
  a {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
`;

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const [hidden, setHidden] = useState(false);
  const {scrollY} = framerUseScroll();
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useMotionValueEvent(scrollY, "change", (latest)=>{
    if(scrollY?.current < scrollY?.prev){
      setHidden(false);
    }
    else if(scrollY?.current > 99 && scrollY?.current > scrollY?.prev){
      setHidden(true);
    }
  })

  return (
    <NavigationWrapper
      currentPath={currentPath}
      variants={theme.framerAnimations.navTransition}
      animate={hidden ? "hidden" : "visible"}
      exit={"exit"}
      transition={theme.framerAnimations.navTransition.transition}
    >
      <Link to="/" className="logo">
        <img src="" alt="avatar" /> <span>berkaysson</span>
      </Link>
      {currentPath === "/" ? (
        <NavigationMenuWrapper>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </NavigationMenuWrapper>
      ) : (
        ""
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
