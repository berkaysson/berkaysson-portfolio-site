import { styled } from "styled-components";
import SkillItem from "./SkillItem";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid red;
  padding: ${({ theme }) => theme.sizes.xlg};

  h2 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
`;

const SkillsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes.lg};
  gap: ${({ theme }) => theme.sizes.xsl};
`;

const Skills = () => {
  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "React Router",
    "Material UI",
    "npm",
    "git",
    "Styled-Components",
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
