import { styled } from "styled-components";
import BerkayAvatar from "../../Images/berkay-avatar.png";
import AvatarImage from "../Wrappers/Effects/AvatarImage";
import ContactButton from "../Wrappers/Effects/ContactButton";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5%;
  padding-top: 150px;
  background-color: ${({ theme }) => theme.colors.darker};
`;

const AboutHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sectionPadding};
  width: 100%;
  height: 75vh;

  h3 {
    font-size: 3.3rem;
    color: ${({ theme }) => theme.colors.lightest};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.theme};
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  div {
    max-width: 1000px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.sizes.md};
  padding: ${({ theme }) => theme.sectionPadding};

  h3 {
    font-size: 2rem;
  }

  p {
    /* font-size: ${({ theme }) => theme.sizes.sl}; */
    max-width: 1300px;

    &:last-child {
      padding-top: 1rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.theme};
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>
        <div>
          <h1>Hi, I'm Berkay Sonel</h1>
          <h3>
            I am a front-end developer. I love creating awesome web experiences.
          </h3>
        </div>
        <AvatarImage src={BerkayAvatar} alt="berkayPhoto" />
      </AboutHeader>
      <AboutSection>
        <h3>What is my story ?</h3>
        <div>
          <p>
            From a young age, I've always been drawn to problem-solving and
            bringing ideas to life, which is why I initially pursued a career in
            Civil Engineering. However, I soon realized that coding was my true
            ambition and made the decision to switch paths. One significant
            moment that solidified my passion for coding and made me realize I
            couldn't find the same joy in Civil Engineering was when I was 14
            and started modding the game Mount and Blade using Python. It was an
            eye-opening experience that allowed me to explore the power of
            coding, customize the game to my liking, create things, and witness
            the endless possibilities of digital creation.
          </p>
          <br />
          <p>
            Since then, my coding journey has been filled with excitement and
            continuous learning. The Odin Project, an invaluable resource, has
            played a pivotal role in shaping my expertise in modern web
            development practices. Through resources like The Odin Project, I've
            sharpened my skills in modern web development practices. I have
            learned and developed my skills in JavaScript, HTML, CSS, React.js,
            and various other technologies. With these skills, I have the
            ability to create web applications and develop user interfaces. I
            continuously expand my skill set and stay up-to-date with the latest
            industry trends
          </p>
          <p>
            You can find my skills, projects, and links below. Feel free to
            explore and get in touch. I look forward to the opportunity of
            collaborating on exciting projects with you.
          </p>
        </div>
      </AboutSection>
      <ContactButton />
    </AboutWrapper>
  );
};

export default About;
