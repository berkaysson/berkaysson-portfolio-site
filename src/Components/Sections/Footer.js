import { styled } from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
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

  &:hover{
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>©Berkay Sonel - 2023</span>
      <AnchorsContainer>
        <AnchorWrapper href="/">
          <GitHubIcon /> <span>Github</span>
        </AnchorWrapper>
        <AnchorWrapper href="/">
          <EmailIcon /> <span>Email</span>
        </AnchorWrapper>
      </AnchorsContainer>
    </FooterWrapper>
  );
};

export default Footer;
