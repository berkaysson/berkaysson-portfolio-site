import { styled } from "styled-components";
import ProjectItem from "./ProjectItem";
import lifemapImg from "../../../Images/lifemap/lifemap-launch.png";

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

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.sizes.md};
  }
`;

const Projects = ({ projectContentRef, screenWidth }) => {
  return (
    <ProjectsWrapper id="projects">
      <h1>Projects</h1>
      <ProjectItem
        itemName={"lifemap"}
        siteLink={"https://berkaysson.github.io/lifemap"}
        isMouseFollowerOn={screenWidth <= 1024}
        projectContentRef={projectContentRef}
        imgPath={lifemapImg}
      />
    </ProjectsWrapper>
  );
};

export default Projects;
