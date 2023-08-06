import styled from "styled-components";
import { motion } from "framer-motion";

export const NavigationWrapper = styled(motion.div)`
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 1;
  margin: ${({ theme }) => theme.sizes.md} 0;

  //glassmorphism
  background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.6);

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
