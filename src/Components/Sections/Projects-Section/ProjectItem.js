import { styled } from "styled-components";
import { NeuCardWrapper } from "../../Wrappers/Effects/NeuCardWrapper";
import { Link } from "react-router-dom";
import { projectContents } from "./projectContents";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GlassCardWrapper } from "./../../Wrappers/Effects/GlassCardWrapper";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ProjectItemWrapper = styled.div`
  transition: ${({ theme, inView }) =>
    inView ? theme.transitions.main : "none"};
  transform: scale(${({ inView }) => (inView ? 1 : 0)});
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  filter: blur(${({ inView }) => (inView ? 0 : "3px")});
`;

const ProjectItemInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 1rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    min-width: 550px;
  }

  @media (max-width: 768px) {
    min-width: auto;
    padding: 0.5rem;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const MainImgWrapper = styled.a`
  overflow: hidden;
  display: inline-block;
  position: relative;

  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media (max-width: 1024px) {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const MainImg = styled.img`
  height: 100%;
  width: 100%;
  vertical-align: center;
  transition: filter 0.2s ease, transform 0.5s ease;

  &:hover {
    filter: contrast(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ProjectContentWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.lg};
  text-align: center;
  font-size: 20px;
  transition: background-color 0.5s ease;
  position: relative;
  background-color: ${({ theme }) => theme.colors.medium};

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  @media (max-width: 1024px) {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.sizes.lg};
    padding-bottom: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 16px;
    gap: ${({ theme }) => theme.sizes.sl};
  }
`;

const ProjectLogo = styled.div`
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

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.md};

  p:last-child {
    font-size: ${({ theme }) => theme.sizes.sl};
  }
`;

const ClickText = styled(GlassCardWrapper)`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => theme.colors.darker};
  background-color: ${({ theme }) => theme.colors.lightest};
  font-weight: bold;
  pointer-events: none;
  font-size: ${({ theme }) => theme.sizes.sl};
  padding: ${({ theme }) => theme.sizes.xsl};

  svg {
    margin-left: 5px;
    font-size: 16px;
    transform: translateY(23%);
  }
`;

const ProjectItem = ({
  itemName,
  siteLink,
  isMouseFollowerOn,
  imgRef,
  contentRef,
  imgPath,
  logoComponent,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <ProjectItemWrapper ref={ref} inView={inView}>
      <NeuCardWrapper neuType="concave">
        <ProjectItemInnerWrapper>
          <MainImgWrapper
            target="_blank"
            rel="noopener noreferrer"
            href={siteLink}
          >
            <MainImg
              id={`${itemName}Img`}
              src={imgPath}
              alt={`${itemName}Img`}
              isMouseFollowerOn={isMouseFollowerOn}
              ref={imgRef}
            />
            <ClickText>
              GO TO WEBSITE <OpenInBrowserIcon />
            </ClickText>
          </MainImgWrapper>

          <ProjectContentWrapper
            to={`/project-${itemName}`}
            ref={contentRef}
            id={`${itemName}Content`}
          >
            <ProjectLogo style={{ pointerEvents: "none" }}>
              {logoComponent}
            </ProjectLogo>
            <ProjectContent style={{ pointerEvents: "none" }}>
              {projectContents[itemName].description}
            </ProjectContent>
            <ClickText>
              GO TO DETAILS <InfoOutlinedIcon />
            </ClickText>
          </ProjectContentWrapper>
        </ProjectItemInnerWrapper>
      </NeuCardWrapper>
    </ProjectItemWrapper>
  );
};

export default ProjectItem;
