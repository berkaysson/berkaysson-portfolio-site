import { styled } from "styled-components";
import BerkayAvatar from "../../Images/berkay-bg2.png";
import AvatarImage from "../Wrappers/Effects/AvatarImage";
import ContactButton from "../Wrappers/Effects/ContactButton";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 5%;
  padding-top: 150px;
  background-color: ${({ theme }) => theme.colors.black};
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

  @media (max-width: 420px) {
    padding: 0.5rem 1rem;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.sizes.md};
  padding: ${({ theme }) => theme.sectionPadding};

  h3 {
    font-size: 2rem;

    @media (max-width: 330px) {
      font-size: 1.7rem;
    }
  }

  p {
    max-width: 1030px;

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

  @media (max-width: 420px) {
    padding: 0.5rem 1rem;
  }
`;

const ResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.sizes.md};
  padding: ${({ theme }) => theme.sectionPadding};

  div{
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  a{
    text-decoration: underline;
    font-size: 20px;

    &:hover{
      text-decoration: none;
    }
  }

  h3 {
    font-size: 2rem;

    @media (max-width: 330px) {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 420px) {
    padding: 0.5rem 1rem;
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>
        <div>
          <h1>Hi, I'm Berkay Sonel</h1>
          <h3>creating awesome web experiences</h3>
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
            ambition and made the decision to switch paths.
          </p>
          <br />
          <p>
            Since then, my coding journey has been filled with excitement and
            continuous learning. The Odin Project, an invaluable resource, has
            played a pivotal role in shaping my expertise in modern web
            development practices. Through resources like The Odin Project, I've
            sharpened my skills in modern web development practices. Then, I
            have been accepted into an educational program organized by
            Microsoft Turkey and Koç Holding, Ctrl + Future. Out of 12000
            applicants, only 400 of us were selected for this opportunity. After
            studying hard and preparing well, I was able to pass the exams and
            interviews for the internship program at KoçSistem. It was a great
            opportunity to learn from experienced mentors and work on
            challenging projects. I gained a lot of valuable skills and
            knowledge that will help me in my future career.
          </p>
          <p>
            You can find my skills, projects, and links below. Feel free to
            explore and get in touch. I look forward to the opportunity of
            collaborating on exciting projects with you.
          </p>
        </div>
      </AboutSection>
      <ContactButton />
      <ResumeSection>
        <h3>My Resumes</h3>
        <div>
          <a
            href="https://www.hostize.com/v/vugRUg1b-n/enberkay-sonel-pdf-berkay-sonel"
            target="_blank"
            rel="noreferrer"
          >
            English
          </a>
          <a
            href="https://www.hostize.com/v/eiHr3m5XFa/trberkay-sonel-pdf"
            target="_blank"
            rel="noreferrer"
          >
            Turkish
          </a>
        </div>
      </ResumeSection>
    </AboutWrapper>
  );
};

export default About;
