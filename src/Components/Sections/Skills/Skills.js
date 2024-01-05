import { styled } from "styled-components";
import SkillItem from "./SkillItem";
import { skillsData, skillsSectionData } from "./skillsData";
import SkillsList from "./SkillsList";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sectionPadding};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 24px;
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

  @media (max-width: 420px){
    padding: .5rem 1rem;
  }
`;

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <h2>What are my Skills ?</h2>
      <SkillsList>
        {skillsSectionData.map((skill, index) => (
          <SkillItem skill={skillsData[skill]} key={index} index={index} />
        ))}
      </SkillsList>
    </SkillsWrapper>
  );
};

export default Skills;
