import styled from "styled-components";
import { motion } from "framer-motion";

export const NavigationWrapper = styled(motion.div)`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  border: 1px solid red;
  z-index: 3;
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
  margin-right: ${({ theme }) => theme.sizes.xlg};
  font-size: ${({ theme }) => theme.sizes.lg};

  @media (max-width: 500px) {
    gap: ${({ theme }) => theme.sizes.md};
    font-size: ${({ theme }) => theme.sizes.md};
    margin-right: ${({ theme }) => theme.sizes.sl};
  }
`;