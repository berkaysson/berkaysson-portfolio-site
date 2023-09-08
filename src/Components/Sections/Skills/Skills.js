import { styled } from "styled-components";
import SkillItem from "./SkillItem";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sectionPadding};
  width: 100%;
  height: 50vh;

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
    { name: "JavaScript", img: "" },
    { name: "HTML", img: "" },
    { name: "CSS", img: "" },
    { name: "React.js", img: "" },
    { name: "React Router", img: "" },
    { name: "Material UI", img: "" },
    { name: "npm", img: "" },
    { name: "git", img: "" },
    { name: "Styled-Components", img: "" },
    { name: "C#", img: "" },
  ];
  return (
    <SkillsWrapper id="skills">
      <h2>What are My Skills</h2>
      <SkillsListWrapper>
        {skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} index={index} />
        ))}
      </SkillsListWrapper>
    </SkillsWrapper>
  );
};

export default Skills;
