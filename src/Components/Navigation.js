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
  opacity: 1;
  transition: ${({theme}) => theme.transitions.main};

  .logo {
    padding: 0 ${({ theme }) => theme.sizes.sl};
    img {
      margin: auto ${({ theme }) => theme.sizes.sl};
      width: ${({ theme }) => theme.sizes.xlg};
      height: auto;
    }
  }

  &.nav-hidden {
    transform: scale(0);
    filter: blur(3px);
    opacity: 0;
    z-index: 0;
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
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScroll();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 99 || scroll.y - scroll.lastY > 0)
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
