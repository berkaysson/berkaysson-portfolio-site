import { styled } from "styled-components";
import SkillItem from "./SkillItem";
import { skillsData } from "./skillsData";

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
  gap: ${({ theme }) => theme.sizes.lg};
  max-width: 1000px;

  @media (max-width: 1000px) {
    justify-content: flex-start;
    padding-top: ${({ theme }) => theme.sizes.xlg};
  }
`;

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <h2>What are my Skills ?</h2>
      <SkillsListWrapper>
        {skillsData.map((skill, index) => (
          <SkillItem skill={skill} key={index} index={index} />
        ))}
      </SkillsListWrapper>
    </SkillsWrapper>
  );
};

export default Skills;
