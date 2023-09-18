import { styled } from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.sl};
  font-size: 14px;
`;

const AnchorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const AnchorWrapper = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>©Berkay Sonel - 2023</span>
      <AnchorsContainer>
        <AnchorWrapper
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/berkaysson"
        >
          <GitHubIcon /> <span>Github</span>
        </AnchorWrapper>
        <AnchorWrapper
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/berkaysonel/"
        >
          <LinkedInIcon /> <span>linkedIn</span>
        </AnchorWrapper>
      </AnchorsContainer>
    </FooterWrapper>
  );
};

export default Footer;
