import { styled } from "styled-components";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const MouseFollowerWrapper = styled.div`
  width: 62px;
  height: 62px;
  background-color: transparent;
  backdrop-filter: ${({ mouseFollowerType }) =>
    mouseFollowerType === "lifemapImg" ? "blur(10px) contrast(1.5)" : "none"};
  border-radius: 50%;
  pointer-events: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 0 2px black;
  transition: all 0.3s, transform 0.8s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible
      ? "scale(1) translate(-50%, -70%)"
      : "scale(0.5) translate(-50%, -70%)"};

  &::before {
    transition: background-color 0.3s;
    position: absolute;
    content: "";
    background-color: ${({ mouseFollowerType }) =>
      mouseFollowerType === "lifemapImg" ? "#ff6d00" : "black"};
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.8;
    z-index: -1;

    @media (max-width: 1024px){
      opacity: 0.3;
    }
  }

  svg {
    position: absolute;
    color: black;
    z-index: -1;
    font-size: 30px;
  }
`;

const MouseFollower = ({
  visible,
  text,
  mouseFollowerType,
  screenWidth = 1,
}) => {
  return (
    <MouseFollowerWrapper
      mouseFollowerType={mouseFollowerType}
      visible={visible}
    >
      {text}
      {screenWidth <= 1024 ? <TouchAppIcon /> : ""}
    </MouseFollowerWrapper>
  );
};

export default MouseFollower;
