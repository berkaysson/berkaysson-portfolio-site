import { useInView } from "framer-motion";
import { useRef } from "react";
import { styled } from "styled-components";

const ProjectContentItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  position: relative;
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  transition: ${({ theme, inView }) =>
    inView ? theme.transitions.main : "none"};
  transform: scale(${({ inView }) => (inView ? 1 : 0)});
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  filter: blur(${({ inView }) => (inView ? 0 : "3px")});
  background-color: ${({ theme }) => theme.colors.darker};
  max-width: 1300px;

  &:last-child {
    margin-bottom: 1rem;
    hr {
      display: none;
    }
  }

  h2 {
    font-size: 2rem;
  }

  p,
  ul {
    width: 70%;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  img {
    width: 60%;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: ${({ theme }) => theme.borders.roundedSl};
    margin-top: 5rem;
    box-shadow: 0px 0px 3px ${({ theme }) => theme.colors.lighter};

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  hr {
    margin: 0 auto;
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
