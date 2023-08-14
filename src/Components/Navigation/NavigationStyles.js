import styled from "styled-components";

export const NavigationWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 1;

  .logo {
    padding: 0 ${({ theme }) => theme.sizes.sl};
    img {
      margin: auto ${({ theme }) => theme.sizes.sl};
      width: ${({ theme }) => theme.sizes.xlg};
      height: auto;

      @media (max-width: 768px) {
        width: ${({ theme }) => theme.sizes.lg};
      }
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
