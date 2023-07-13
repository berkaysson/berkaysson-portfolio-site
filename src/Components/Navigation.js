import styled from "styled-components";

const NavigationWrapper = styled.div`
  width: 100px;
  height: 100%;
  position: fixed;
  border: 1px solid red;
  z-index: 3;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    display: block;
    padding: 8px 0;
    img {
      display: block;
      margin: 8px auto;
      width: 25px;
      height: auto;
    }
  }
`;

const NavigationMenuWrapper = styled.nav`
  display: block;
  text-align: center;
  position: absolute;
  height: 220px;
  top: 50%;
  width: 100%;
  margin-top: -120px;

  a{
    font-size: 22px;
    display: block;
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
