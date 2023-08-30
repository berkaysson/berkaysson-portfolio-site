import { styled } from "styled-components";
import ProjectItem from "./ProjectItem";
import lifemapImg from "../../../Images/lifemap/lifemap-launch.png";
import LifemapLogo from "../../../Images/lifemap/LifemapLogo";
import dhondtImg from "../../../Images/dhondt/dhondt-launch.png";

const ProjectsWrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.xlg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.lg};
  background-color: ${({ theme }) => theme.colors.darker};

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.sizes.md};
  }
`;

const Projects = ({   lifemapImgRef,
  lifemapContentRef,
  dhondtAppImgRef,
  dhondtAppContentRef, screenWidth }) => {
  return (
    <ProjectsWrapper id="projects">
      <h1>Projects</h1>
      <ProjectItem
        itemName={"lifemap"}
        siteLink={"https://berkaysson.github.io/lifemap"}
        isMouseFollowerOn={screenWidth <= 1024}
        imgRef={lifemapImgRef}
        contentRef={lifemapContentRef}
        imgPath={lifemapImg}
        logoComponent={<LifemapLogo />}
      />
      <ProjectItem
        itemName={"dhondtApp"}
        siteLink={"https://berkaysson.github.io/dhondt-system-calculator/"}
        isMouseFollowerOn={screenWidth <= 1024}
        imgRef={dhondtAppImgRef}
        contentRef={dhondtAppContentRef}
        imgPath={dhondtImg}
        logoComponent={""}
      />
    </ProjectsWrapper>
  );
};

export default Projects;
