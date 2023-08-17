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

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.sizes.md};
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
