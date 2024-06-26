import { styled } from "styled-components";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NeuCardWrapper } from "../../Wrappers/Effects/NeuCardWrapper";

const SkillItemWrapper = styled.li`
  width: ${({ size }) => (size === "normal" ? "150px" : "90px")};
  height: ${({ size }) => (size === "normal" ? "150px" : "90px")};
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
      top: 50%;
    }
    img {
      filter: blur(10px) contrast(1.4);
      transform: scale(0.8) rotate(3deg);
    }
  }

  img {
    padding: 10%;
    border-radius: ${({ theme }) => theme.borders.roundedMd};
    height: 100%;
    width: 100%;
    transition: filter 0.2s, transform 0.6s;
  }
  span {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.4;
    font-style: italic;
    transition: opacity 0.5s, top 0.4s;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.lightest};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.darker};
    font-size: ${({ theme }) => theme.sizes.sl};
  }
`;

const SkillItem = ({ skill, index, size = "normal" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <SkillItemWrapper
      style={{ transitionDelay: `${index / Math.exp(3)}s` }}
      ref={ref}
      inView={inView}
      size={size}
    >
      <NeuCardWrapper neuType="convex">
        <span>{skill?.name}</span>
        <img src={skill?.iconSrc} alt="skillItemImg" />
      </NeuCardWrapper>
    </SkillItemWrapper>
  );
};

export default SkillItem;
