import { useInView } from "framer-motion";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useRef } from "react";
import lifemapLaunchImg from "../Images/lifemap/lifemap-launch.png";

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
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 0;
  transition: ${({ theme, inView }) =>
    inView ? theme.transitions.main : "none"};
  transform: scale(${({ inView }) => (inView ? 1 : 0)});
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  filter: blur(${({ inView }) => (inView ? 0 : "3px")});
`;

const MainImgWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  position: relative;
`;

const MainImg = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: center;
  filter: grayscale(100%) contrast(0.8);
  transition: filter 0.2s ease, transform 0.5s ease;

  &:hover {
    filter: grayscale(0) contrast(1.1);
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.lg};
  text-align: center;
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
        <MainImgWrapper>
          <MainImg id="lifemapImg" src={lifemapLaunchImg} alt="lifemapImg" />
        </MainImgWrapper>
        
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
