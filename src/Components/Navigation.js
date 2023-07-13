import styled from "styled-components";

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

  .logo {
    display: block;
    padding: 0 8px;
    img {
      display: block;
      margin: auto 8px;
      width: 25px;
      height: auto;
    }
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
  return (
    <NavigationWrapper>
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
