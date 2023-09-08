import styled from "styled-components";

export const NavigationWrapper = styled.div`
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  color: ${({ theme }) => theme.colors.darker};

  .logo {
    svg {
      margin: auto ${({ theme }) => theme.sizes.md};
      width: 90px;
    }
  }
`;

export const NavigationMenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xlg};
  margin: 0 ${({ theme }) => theme.sizes.xlg};
  font-size: ${({ theme }) => theme.sizes.md};

  @media (max-width: 500px) {
    gap: ${({ theme }) => theme.sizes.md};
    margin-right: ${({ theme }) => theme.sizes.sl};
  }
`;
