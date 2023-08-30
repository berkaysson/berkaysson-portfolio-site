import { useInView } from "framer-motion";
import { useRef } from "react";
import { styled } from "styled-components";

const ProjectContentItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto auto;
  position: relative;
  padding: 2rem;
  grid-gap: 1rem;
  justify-content: center;
  transition: ${({ theme, inView }) =>
    inView ? theme.transitions.main : "none"};
  transform: scale(${({ inView }) => (inView ? 1 : 0)});
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  filter: blur(${({ inView }) => (inView ? 0 : "3px")});

  h2 {
    grid-area: 1/1/2/3;
  }

  p, ul {
    grid-area: ${({ order }) => (order % 2 === 0 ? "2/1/3/2" : "2/2/3/3")};
    text-align: justify;
  }

  img {
    grid-area: ${({ order }) => (order % 2 === 0 ? "2/2/3/2" : "2/1/3/2")};
  }

  @media (max-width: 1024px) {
    grid-template-rows: auto auto auto;
    p, ul {
      grid-area: 3/1/4/3;
    }

    img {
      grid-area: 2/1/3/3;
    }
  }
`;

const ProjectContentItem = ({ order, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <ProjectContentItemWrapper order={order} ref={ref} inView={inView}>
      {children}
    </ProjectContentItemWrapper>
  );
};

export default ProjectContentItem;
