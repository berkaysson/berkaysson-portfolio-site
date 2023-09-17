import { styled } from "styled-components";
import SkillItem from "./SkillItem";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sectionPadding};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darker};
  padding-bottom: 10%;
  border-bottom-left-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom-right-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lighter};
  box-shadow: rgba(190, 229, 242, 0.45) 0px 5px 8px -5px;

  h2 {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const SkillsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.sizes.xsl};
  max-width: 1300px;

  @media (max-width: 1000px) {
    justify-content: flex-start;
    padding-top: 1rem;
  }
`;

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      name: "React.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Material UI",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg",
    },
    {
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    },
    {
      name: "git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      name: "styled-components",
      img: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
    },
  ];
  return (
    <SkillsWrapper id="skills">
      <h2>What are my Skills ?</h2>
      <SkillsListWrapper>
        {skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} index={index} />
        ))}
      </SkillsListWrapper>
    </SkillsWrapper>
  );
};

export default Skills;
