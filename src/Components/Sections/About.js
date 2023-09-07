import { styled } from "styled-components";
import BerkayAvatar from "../../Images/berkay-avatar.png"
import AvatarImage from "../Wrappers/Effects/AvatarImage";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.4rem;
`;

const AboutHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75vh;
  width: 100%;
  text-align: center;
  padding: 0 ${({ theme }) => theme.sizes.xlg};

  h3 {
    font-size: ${({ theme }) => theme.sizes.lg};
    color: ${({ theme }) => theme.colors.lightest};
  }

  h1 {
    font-size: ${({ theme }) => theme.sizes.xlg};
    color: ${({ theme }) => theme.colors.theme};
  }

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.sizes.md};
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  gap: ${({ theme }) => theme.sizes.md};
  padding: ${({ theme }) => theme.sizes.xlg};
  padding-top: 0;

  h3 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.sl};

    &:last-child {
      font-size: ${({ theme }) => theme.sizes.md};
      text-align: center;
      color: ${({ theme }) => theme.colors.theme};
    }
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.sizes.md};
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>
        <h1>Hi, I'm Berkay Sonel</h1>
        <AvatarImage src={BerkayAvatar} alt="berkayPhoto" />
        <h3>
          I am self-taught front-end developer. I love creating awesome web
          experiences.
        </h3>
      </AboutHeader>
      <AboutSection>
        <h3>What is my story ?</h3>
        <p>
          From a young age, I've always been drawn to problem-solving and
          bringing ideas to life, which is why I initially pursued a career in
          Civil Engineering. However, I soon realized that coding was my true
          ambition and made the decision to switch paths. One significant moment
          that solidified my passion for coding and made me realize I couldn't
          find the same joy in Civil Engineering was when I was 14 and started
          modding the game Mount and Blade using Python. It was an eye-opening
          experience that allowed me to explore the power of coding, customize
          the game to my liking, create things, and witness the endless
          possibilities of digital creation.
        </p>
        <p>
          Since then, my coding journey has been filled with excitement and
          continuous learning. The Odin Project, an invaluable resource, has
          played a pivotal role in shaping my expertise in modern web
          development practices. Through resources like The Odin Project, I've
          sharpened my skills in modern web development practices. I have
          learned and developed my skills in JavaScript, HTML, CSS, React.js,
          and various other technologies. With these skills, I have the ability
          to create web applications and develop user interfaces. I continuously
          expand my skill set and stay up-to-date with the latest industry
          trends
        </p>

        <p>
          You can find my skills, projects, and links below. Feel free to
          explore and get in touch. I look forward to the opportunity of
          collaborating on exciting projects with you.
        </p>
      </AboutSection>
    </AboutWrapper>
  );
};

export default About;
