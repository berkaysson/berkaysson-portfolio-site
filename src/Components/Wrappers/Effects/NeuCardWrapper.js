import { styled } from "styled-components";

export const NeuCardWrapper = styled.div`
  box-shadow: ${({ theme, neuType }) =>
    theme.boxShadows.neumorphism[neuType].boxShadow};
  background: ${({ theme, neuType }) =>
    theme.boxShadows.neumorphism[neuType].background};
  border-radius: ${({ theme }) => theme.sizes.md};
  border: 1px solid ${({ theme }) => theme.colors.medium};
  width: 100%;
  height: 100%;
`;
