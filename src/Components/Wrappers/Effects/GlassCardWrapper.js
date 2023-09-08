import { styled } from "styled-components";

export const GlassCardWrapper = styled.div`
  background: ${({theme})=> theme.colors.lightest};
  color: ${({theme})=> theme.colors.dark};
  border-radius: ${({ theme }) => theme.borders.roundedSl};
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
  border: ${({theme})=> theme.colors.medium};;
  filter: drop-shadow(0px 0px 3px rgba(55, 55, 55, 0.9));
`;
