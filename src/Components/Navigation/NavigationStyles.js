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
    gap: 0.8rem;
  }
`;

export const NavigationMenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.md};
  margin-left: 4rem;
  gap: 0.8rem;

  a {
    padding-bottom: 3px;
    box-shadow: 0px 4px 0px ${({ theme }) => theme.colors.medium};
    transition: .1s box-shadow;
    border-radius: ${({ theme }) => theme.borders.sharp};
    &:hover {
      box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.darker};
      padding-bottom: 1px;
    }
  }

  @media (max-width: 475px) {
    margin-left: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0 2rem;
    margin-left: 0;
    gap: 1rem;
  }
`;
