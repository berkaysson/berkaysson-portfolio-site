import { useInView } from "framer-motion";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ProjectsWrapper = styled.div`
  border: 1px solid red;
  padding: ${({ theme }) => theme.sizes.xlg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.lg};

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
`;

const ProjectItem = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.xlg} ${({ theme }) => theme.sizes.sl};
  transition: ${({ theme, inView }) =>
    inView ? theme.transitions.main : "none"};
  transform: scale(${({ inView }) => (inView ? 1 : 0)});
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  filter: blur(${({ inView }) => (inView ? 0 : "3px")});
`;

const MainImg = styled.img`
  border: 1px solid green;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const ProjectContent = styled.div`
  z-index: 2;
  background-color: gray;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.lg};
  text-align: center;
  padding: ${({ theme }) => theme.sizes.lg};
  font-size: 20px;
`;

const DetailsButton = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 3;
`;

const DemoButton = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ProjectItemHeader = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

const ProjectItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.md};

  p:last-child {
    font-size: ${({ theme }) => theme.sizes.sl};
  }
`;

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <ProjectsWrapper id="projects">
      <h1>Projects</h1>
      <ProjectItem ref={ref} inView={inView}>
        <MainImg src="" alt="lifemapImg" />
        <ProjectContent>
          <ProjectItemHeader>
            <img src="" alt="lifemapLogo" />
            <h2>lifemap</h2>
          </ProjectItemHeader>
          <ProjectItemContent>
            <p>
              Lifemap is a powerful life tracking platform designed to help you
              stay organized and achieve your goals
            </p>
            <p>
              Devoloped with JavaScript, React.js, CSS, Material UI, and
              styled-components
            </p>
          </ProjectItemContent>
        </ProjectContent>
        <DetailsButton to="/project-lifemap">More details...</DetailsButton>
        <DemoButton href="">Live Demo</DemoButton>
      </ProjectItem>
    </ProjectsWrapper>
  );
};

export default Projects;
