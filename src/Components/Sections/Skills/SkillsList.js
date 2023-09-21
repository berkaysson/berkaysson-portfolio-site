import styled from "styled-components";

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

const SkillsList = ({children}) => {
  return <SkillsListWrapper>
    {children}
  </SkillsListWrapper>
}

export default SkillsList;