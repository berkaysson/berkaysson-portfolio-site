import { styled } from "styled-components";
import ProjectItem from "./ProjectItem";
import lifemapImg from "../../../Images/lifemap/lifemap-launch.png";
import LifemapLogo from "../../../Images/lifemap/LifemapLogo";
import dhondtImg from "../../../Images/dhondt/dhondt-launch.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import HarmoniiLogo from "../../../Images/harmonii/harmonii_logo.png";
import HarmoniiLaunch from "../../../Images/harmonii/harmonii_launch.png";

const ProjectsWrapper = styled.div`
  padding: ${({ theme }) => theme.sectionPadding};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.lg};
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding-bottom: 10%;

  h1 {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
  }

  @media (max-width: 420px) {
    padding: 0.5rem 1rem;
  }
`;

const ProjectsGithubLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  padding: 1rem;
  border: 2px dashed ${({ theme }) => theme.colors.lighter};
  border-radius: ${({ theme }) => theme.borders.roundedSl};
  background-color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;

    svg {
      font-size: 2rem;
      transition: transform 0.5s, color 0.2s;
    }
  }

  &:hover {
    text-decoration: underline;
    border-style: solid;
    span {
      svg {
        transform: rotate(360deg);
        color: ${({ theme }) => theme.colors.theme};
      }
    }
  }

  @media (max-width: 578px) {
    font-size: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Projects = ({
  lifemapImgRef,
  lifemapContentRef,
  dhondtAppImgRef,
  dhondtAppContentRef,
  harmoniiImgRef,
  harmoniiContentRef,
  screenWidth,
}) => {
  return (
    <ProjectsWrapper id="projects">
      <h1>Projects</h1>
      <ProjectItem
        itemName={"harmonii"}
        siteLink={"https://harmoniiserver20240101185412.azurewebsites.net/"}
        isMouseFollowerOn={screenWidth <= 1024}
        imgRef={harmoniiImgRef}
        contentRef={harmoniiContentRef}
        imgPath={HarmoniiLaunch}
        logoComponent={""}
        logoImg={HarmoniiLogo}
      />
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
      <ProjectsGithubLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.paygenclikdernegi.org/"
      >
        Also click for my voluntarily freelance project for Pay Genclik Dernegi
      </ProjectsGithubLink>
      <ProjectsGithubLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/berkaysson"
      >
        You can find more on my github profile
        <span>
          <GitHubIcon /> Github
        </span>
      </ProjectsGithubLink>
    </ProjectsWrapper>
  );
};

export default Projects;
