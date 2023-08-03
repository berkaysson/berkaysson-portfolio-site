import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    // do not remove setTimeout, without it it is not working
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
};

export default ScrollToTop;
