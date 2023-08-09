import { styled } from "styled-components";

export const NeuCardWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadows.neumorphism.boxShadow};
  background: ${({ theme }) => theme.boxShadows.neumorphism.background};
  border-radius: ${({ theme }) => theme.sizes.md};
`;
