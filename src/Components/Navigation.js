import styled from "styled-components";
import useScroll from "../Hooks/useScroll";
import { useEffect, useState } from "react";

const NavigationWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  border: 1px solid red;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;

  .logo {
    padding: 0 8px;
    img {
      margin: auto 8px;
      width: 25px;
      height: auto;
    }
  }

  &.nav-hidden {
    transform: translateY(-100%);
  }
`;

const NavigationMenuWrapper = styled.nav`
  a {
    font-size: 22px;
    line-height: 50px;
    height: 50px;
    position: relative;
  }
`;

const Navigation = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScroll();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <NavigationWrapper className={navClassList.join(" ")}>
      <a href="/" className="logo">
        <img src="" alt="avatar" /> <span>berkaysson</span>
      </a>
      <NavigationMenuWrapper>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </NavigationMenuWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
