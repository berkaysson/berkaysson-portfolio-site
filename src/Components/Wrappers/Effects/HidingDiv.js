import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { styled } from "styled-components";
import useScroll from "../../../Hooks/useScroll";

const Container = styled.div`
`;

const HidingDivWrapper = styled.div`
  width: 100%;
  position: relative;
  transform: translateY(${({ yValue }) => yValue}%);
  z-index: -1;
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

  return (
    <Container ref={ref} inView={inView}>
      <HidingDivWrapper yValue={yValue} id={id}>
        {children}
      </HidingDivWrapper>
    </Container>
  );
};

export default HidingDiv;
