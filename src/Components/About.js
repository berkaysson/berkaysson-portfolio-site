import { styled } from "styled-components";

const AboutWrapper = styled.div`
  padding-top: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 75vh;
  text-align: center;
  border: 1px solid red;
  padding:0 ${({ theme }) => theme.sizes.xlg};

  h3 {
    font-size: ${({ theme }) => theme.sizes.xlg};
  }

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }

  img {
    border: 1px solid blue;
    height: auto;
    width: 400px;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  gap: ${({ theme }) => theme.sizes.md};
  border: 1px red solid;
  padding: ${({ theme }) => theme.sizes.xlg};

  h3 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.sl};

    &:last-child{
      font-size: ${({ theme }) => theme.sizes.md};
      text-align: center;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutHeader>
        <h3>Hi, I'm Berkay Sonel</h3>
        <img src="" alt="berkayPhoto" />
        <h1>
          I am self-taught front-end developer. I love creating awesome web
          experiences.
        </h1>
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
          explore and get in touch. I look forward to the opportunity of collaborating on exciting
          projects with you.
        </p>
        
      </AboutSection>
    </AboutWrapper>
  );
};

export default About;
