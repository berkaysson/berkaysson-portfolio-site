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

  &:hover {
    span {
      opacity: 1;
    }
    img {
      filter: blur(10px) contrast(0.5);
    }
  }

  img {
    padding: 10%;
    border-radius: ${({ theme }) => theme.borders.roundedMd};
    height: 100%;
    width: 100%;
    transition: filter 0.2s;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.theme};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.darker};
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
        <span>{skill.name}</span>
        <img src={skill.iconSrc} alt="skillItemImg" />
      </NeuCardWrapper>
    </SkillItemWrapper>
  );
};

export default SkillItem;
