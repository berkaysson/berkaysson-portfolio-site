import { styled } from "styled-components";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NeuCardWrapper } from "../../Wrappers/Effects/NeuCardWrapper";

const SkillItemWrapper = styled.li`
  width: 150px;
  height: 150px;
  position: relative;
  text-align: center;
  //fade out transition
  transition: ${({ theme, inView }) =>
    inView ? theme.transitions.main : "none"};
  transform: scale(${({ inView }) => (inView ? 1 : 0)});
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  filter: blur(${({ inView }) => (inView ? 0 : "3px")});

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const SkillItem = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <SkillItemWrapper
      style={{ transitionDelay: `${index / Math.exp(3)}s` }}
      ref={ref}
      inView={inView}
    >
      <NeuCardWrapper neuType="convex">
        <span>{skill}</span>
        <img src="" alt="skillItemImg" />
      </NeuCardWrapper>
    </SkillItemWrapper>
  );
};

export default SkillItem;
