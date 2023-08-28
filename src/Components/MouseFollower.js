import { useEffect, useState } from "react";
import { styled } from "styled-components";

const MouseFollowerWrapper = styled.div`
  width: 62px;
  height: 62px;
  background-color: transparent;
  backdrop-filter: ${({ mouseFollowerStyle }) => mouseFollowerStyle};
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
    background-color: ${({ mouseFollowerStyle }) => mouseFollowerStyle.bgColor};
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.8;
    z-index: -1;
  }

  svg {
    position: absolute;
    color: black;
    z-index: -1;
    font-size: 30px;
  }
`;

const projectStyles = {
  img: {
    lifemap: {
      backDrop: "blur(10px) contrast(1.5)",
      bgColor: "#ff6d00",
    },
    dhondtApp: {
      backDrop: "blur(10px) contrast(1.5)",
      bgColor: "#ff6d00",
    },
  },
  content: {
    lifemap: {
      backDrop: "",
      bgColor: "black",
    },
    dhondtApp: {
      backDrop: "",
      bgColor: "black",
    },
  },
};

const MouseFollower = ({
  visible,
  text,
  mouseFollowerType,
  screenWidth = 1,
}) => {
  const [mouseFollowerStyle, setMouseFollowerStyle] = useState({});

  useEffect(() => {
    if (visible) {
      setMouseFollowerStyle(
        projectStyles[mouseFollowerType?.type][mouseFollowerType?.project]
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseFollowerType]);
  return (
    <MouseFollowerWrapper
      mouseFollowerStyle={mouseFollowerStyle}
      visible={visible}
    >
      {text}
    </MouseFollowerWrapper>
  );
};

export default MouseFollower;
