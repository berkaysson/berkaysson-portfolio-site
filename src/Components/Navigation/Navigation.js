import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useScroll as framerUseScroll,
  useMotionValueEvent,
} from "framer-motion";
import { theme } from "../../Styles/theme";
import { NavigationWrapper, NavigationMenuWrapper } from "./NavigationStyles";

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
      <NavigationMenuWrapper>
        {
          currentPath === "/" ?
          <>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </>
          : 
          <Link to="/">Home</Link>
        }
      </NavigationMenuWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
