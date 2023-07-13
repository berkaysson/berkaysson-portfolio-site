import styled from "styled-components";

const NavigationWrapper = styled.nav`
  width: 100px;
  height: 100%;
  position: absolute;
  border: 1px solid red;
  z-index: 3;
  min-height: 500px;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <a href="/">
        <img src="" alt="avatar" /> <span>berkaysson</span>
      </a>
      <a href="/">About</a>
      <a href="/">Projects</a>
      <a href="/">Contact</a>
    </NavigationWrapper>
  );
};

export default Navigation;
