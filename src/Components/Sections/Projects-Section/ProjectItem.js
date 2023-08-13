import { styled } from "styled-components";
import { NeuCardWrapper } from "../../Wrappers/NeuCardWrapper";
import MouseFollower from "../../MouseFollower";
import { Link } from "react-router-dom";
import { projectContents } from "./projectContents";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  filter: ${({ isMouseFollowerOn }) =>
    isMouseFollowerOn
      ? "grayscale(0) contrast(1.1)"
      : "grayscale(100%) contrast(0.8)"};
  transition: filter 0.2s ease, transform 0.5s ease;

  &:hover {
    filter: grayscale(0) contrast(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const MouseFollowerWrapper = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
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

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  @media (max-width: 1024px) {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.sizes.lg};
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

const ProjectItem = ({
  itemName,
  siteLink,
  isMouseFollowerOn,
  projectContentRef,
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
            />
            {isMouseFollowerOn ? (
              <MouseFollowerWrapper>
                <MouseFollower
                  visible={true}
                  text={"PREVIEW"}
                  mouseFollowerType={`${itemName}Img`}
                />
              </MouseFollowerWrapper>
            ) : (
              ""
            )}
          </MainImgWrapper>

          <ProjectContentWrapper
            to={`/project-${itemName}`}
            ref={projectContentRef}
            id={`${itemName}Content`}
          >
            <ProjectLogo>{logoComponent}</ProjectLogo>
            <ProjectContent>
              {projectContents[itemName].description}
            </ProjectContent>
            {isMouseFollowerOn ? (
              <MouseFollowerWrapper>
                <MouseFollower
                  visible={true}
                  text={"DETAILS"}
                  mouseFollowerType={`${itemName}Content`}
                />
              </MouseFollowerWrapper>
            ) : (
              ""
            )}
          </ProjectContentWrapper>
        </ProjectItemInnerWrapper>
      </NeuCardWrapper>
    </ProjectItemWrapper>
  );
};

export default ProjectItem;
