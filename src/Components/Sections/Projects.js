import { useInView } from "framer-motion";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useRef } from "react";
import lifemapLaunchImg from "../../Images/lifemap/lifemap-launch.png";
import LifemapLogo from "../../Images/lifemap/LifemapLogo";

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

  @media(max-width:768px){
    padding:${({ theme }) => theme.sizes.md};
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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 75%;
    min-width: 550px;
  }

  @media (max-width: 768px) {
    width: 90%;
    min-width: auto;
  }

  @media(max-width:425px){
    width: 100%;
  }
`;

const MainImgWrapper = styled.a`
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
    cursor: pointer;
  }
`;

const ProjectContent = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.lg};
  text-align: center;
  font-size: 20px;
  transition: background-color 0.5s ease;

  &:hover{
    background-color: lightgray;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.sizes.lg};
  }

  @media(max-width:425px){
    font-size: 16px;
    gap:${({ theme }) => theme.sizes.sl};
  }
`;

const DetailsButton = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 3;
`;

const ProjectItemHeader = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.2em;
    font-weight: bold;
  }

  svg {
    width: 120px;
    height: auto;
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

const Projects = ({projectContentRef}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <ProjectsWrapper id="projects">
      <h1>Projects</h1>
      <ProjectItem ref={ref} inView={inView}>
        <MainImgWrapper
          target="_blank"
          rel="noopener noreferrer"
          href="https://berkaysson.github.io/lifemap/"
        >
          <MainImg id="lifemapImg" src={lifemapLaunchImg} alt="lifemapImg" />
        </MainImgWrapper>

        <ProjectContent to="/project-lifemap" ref={projectContentRef} id="lifemapContent">
          <ProjectItemHeader>
            <LifemapLogo />
          </ProjectItemHeader>
          <ProjectItemContent>
            <p>
              <b
                style={{
                  color: "#abc4ff",
                }}
              >
                lifemap
              </b>{" "}
              is a powerful life tracking platform designed to help you stay
              organized and achieve your goals
            </p>
            <p>
              Devoloped with JavaScript, React.js, CSS, Material UI,
              styled-components and more
            </p>
          </ProjectItemContent>
        </ProjectContent>
        <DetailsButton to="/project-lifemap">More details...</DetailsButton>
      </ProjectItem>
    </ProjectsWrapper>
  );
};

export default Projects;
