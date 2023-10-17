import { useRef } from "react";
import { useInView } from "framer-motion";
import { styled } from "styled-components";
import useScroll from "../../../Hooks/useScroll";
import LinearProgress from "@mui/material/LinearProgress";
import { theme } from "./../../../Styles/theme";

const Container = styled.div`
  position: relative;
  z-index: -1;
  background: rgb(60, 94, 115);
  background: radial-gradient(
    circle,
    rgba(60, 94, 115, 0.4) 0%,
    rgba(20, 26, 38, 1) ${({ inViewPercentage }) => inViewPercentage}%
  );
`;

const HidingDivWrapper = styled.div`
  width: 100%;
  position: relative;
  transform: translateY(${({ yValue }) => yValue}%);
  transition: transform 0.3s ease-out;
`;

const HidingDiv = ({ children, id }) => {
  const ref = useRef();
  const inView = useInView(ref);
  const scrollData = useScroll();
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const divHeight = document.getElementById(id)?.offsetHeight;

  const yValue =
    (Math.max(scrollData.y - documentHeight, -divHeight) / divHeight / 2.5) *
    100;
  const inViewPercentage =
    100 +
    (Math.max(scrollData.y - documentHeight, -divHeight) / divHeight) * 100;

  return (
    <Container ref={ref} inView={inView} inViewPercentage={inViewPercentage}>
      <LinearProgress
        sx={{
          "&.MuiLinearProgress-root": {
            marginTop: "1rem",
            zIndex: "99",
            color: theme.colors.darker,
            borderRadius: "1rem",
            width: "80%",
            marginLeft: "10%",
            boxShadow: "0 0 3px lightgray",
          },
          "&.MuiLinearProgress-determinate": {
            borderRadius: "1rem",
            backgroundColor: theme.colors.lightest,
          },
        }}
        variant="determinate"
        value={inViewPercentage}
        color="inherit"
      />
      <HidingDivWrapper yValue={yValue} id={id}>
        {children}
      </HidingDivWrapper>
    </Container>
  );
};

export default HidingDiv;
