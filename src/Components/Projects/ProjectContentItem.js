import { useInView } from "framer-motion";
import { useRef } from "react";
import { styled } from "styled-components";

const ProjectContentItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  position: relative;
  grid-gap: 1rem;
  justify-content: center;
  transition: ${({ theme, inView }) =>
    inView ? theme.transitions.main : "none"};
  transform: scale(${({ inView }) => (inView ? 1 : 0)});
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  filter: blur(${({ inView }) => (inView ? 0 : "3px")});
  background-color: ${({ theme }) => theme.colors.darker};

  &:last-child {
    margin-bottom: 1rem;
    hr {
      display: none;
    }
  }

  h2 {
    grid-area: 1/1/2/3;
    font-size: 2rem;
  }

  p,
  ul {
    grid-area: ${({ order }) => (order % 2 === 0 ? "2/1/3/2" : "2/2/3/3")};
  }

  img {
    grid-area: ${({ order }) => (order % 2 === 0 ? "2/2/3/2" : "2/1/3/2")};
  }

  hr {
    margin: 0 auto;
    grid-column: 1/3;
    height: 1px;
    width: 20%;
    border-color: ${({ theme }) => theme.colors.dark};
    border-style: solid;
    background-color: ${({ theme }) => theme.colors.dark};
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1024px) {
    grid-template-rows: auto auto auto;
    p,
    ul {
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
      <hr />
    </ProjectContentItemWrapper>
  );
};

export default ProjectContentItem;
