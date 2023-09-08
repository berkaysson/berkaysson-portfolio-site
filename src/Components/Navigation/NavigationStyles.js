import styled from "styled-components";

export const NavigationWrapper = styled.div`
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  color: ${({ theme }) => theme.colors.darker};
  padding: 0 2rem;

  .logo {
    svg {
      margin: auto ${({ theme }) => theme.sizes.md};
      width: 90px;

      @media (max-width: 475px) {
      }
    }
  }

  @media (max-width: 475px) {
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 1rem;
    height: auto;
    gap: 1.5rem;
  }
`;

export const NavigationMenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.md};
  margin-left: 4rem;
  gap: 0.5rem;

  @media (max-width: 475px) {
    margin-left: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0 2rem;
    margin-left: 0;
    gap: 2rem;
  }
`;
