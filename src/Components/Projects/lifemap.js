import { theme } from "../../Styles/theme";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import LifemapLogo from "../../Images/lifemap/LifemapLogo";
import ProjectContentItem from "./ProjectContentItem";
import HidingDiv from "../Wrappers/Effects/HidingDiv";
import LifemapLaunch from "../../Images/lifemap/lifemap-launch.png";
import Lifemap1 from "../../Images/lifemap/lifemapGeneral.png";
import SkillItem from "../Sections/Skills/SkillItem";
import { skillsData } from "../Sections/Skills/skillsData";
import SkillsList from "../Sections/Skills/SkillsList";
import LifemapSummaryGIF from "../../Images/lifemap/lifemapSummary.gif";

const ProjectLifemapContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 150px;

  @media (max-width: 425px) {
    padding-top: 180px;
  }
`;

const ProjectLifemapWrapper = styled.div`
  padding: ${({ theme }) => theme.sectionPadding};
  background-color: ${({ theme }) => theme.colors.darker};
  padding-bottom: 3rem;
  border-bottom-left-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom-right-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lighter};
  box-shadow: rgba(190, 229, 242, 0.45) 0px 5px 8px -5px;

  @media (max-width: 768px) {
  }
`;

const ProjectHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
  svg {
    height: 50px;

    @media (max-width: 365px) {
      height: 45px;
    }
  }

  h2 {
    font-size: 2rem;
    text-align: right;
    @media (max-width: 768px) {
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;

  a {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin: 0.4rem;
    text-decoration: underline;
    color: #ABC4FE;
    text-shadow: 0px 0px 5px black;

    &:first-child{
      color: #fc6d01;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

const ProjectLifemap = () => {
  const techsUsed = [
    "javaScript",
    "react",
    "css",
    "styledComponents",
    "indexedDB",
    "reactRouter",
    "materialUI",
    "firebase",
    "framerMotion",
  ];
  return (
    <ProjectLifemapContainer
      initial={theme.framerAnimations.pageTransition.initial}
      animate={theme.framerAnimations.pageTransition.animate}
      exit={theme.framerAnimations.pageTransition.exit}
      transition={theme.framerAnimations.pageTransition.transition}
      theme={theme}
    >
      <ProjectLifemapWrapper theme={theme}>
        <ProjectHeaderWrapper theme={theme}>
          <LifemapLogo />
          <h2>Front&Back end development</h2>
        </ProjectHeaderWrapper>
        <ProjectContentItem order={1}>
          <h2>Project Overview</h2>
          <p>
            Lifemap is a powerful life tracking platform designed to help you
            stay organized and achieve your goals. It provides a comprehensive
            solution for tracking your activities and finances, allowing you to
            have a clear overview of your progress and make informed decisions.
          </p>
          <img
            className="itemImage"
            src={LifemapLaunch}
            alt="projectOverviewImg"
          />
        </ProjectContentItem>
        <ProjectContentItem order={2}>
          <h2>Purpose and Inspiration</h2>
          <p>
            I developed Lifemap with a clear purpose in mind — to effectively
            manage my time and prevent forgetfulness. As someone who values
            productivity and strives to make the most of every moment, I
            recognized the need for a tool that could help me stay on track and
            remember important tasks and activities.
            <br />
            Lifemap empowers users to take control of their time and achieve
            their goals. For instance, if you're learning a new instrument and
            want to establish a regular practice routine, Lifemap allows you to
            create a habit with a defined frequency (daily, weekly, or monthly).
            You can then track your progress by adding activities whenever you
            practice the instrument.
            <br />
            In addition to activity tracking and habit-building, Lifemap offers
            other features. You can create tasks and manage your finances. I am
            still working on this project time to time, there is always room for
            improvement, I am actively working on enhancing Lifemap by adding
            more visual interactions, such as charts and other interactive
            elements.
          </p>
          <img className="itemImage" src={Lifemap1} alt="purposeImg" />
        </ProjectContentItem>
        <ProjectContentItem order={3}>
          <h2>Technologies</h2>
          <p>
            For Lifemap, I utilized various technologies to build a robust and
            user-friendly application. The project is developed using JavaScript
            and takes advantage of the React.js, which is ideal for its holy
            command of create-react-app, component-based nature, useful hooks
            and efficient rendering. To ensure a visually appealing and
            responsive design; CSS, Material UI, and styled-components were
            employed for styling and theming.
            <br />
            Given the extensive range of features, I opted to create Lifemap as
            a single-page web application using React Router, enabling seamless
            navigation and a smooth user experience. As for data management, I
            initially implemented IndexedDB with Dexie.js, which provided
            offline storage and guest mode capabilities. Additionally, to enable
            multi-device usage and user authentication, I integrated Firebase
            Auth and Firebase Realtime Database, allowing users to access their
            data securely across multiple devices while also offering a guest
            mode option. And finally i deploy the app with Github-Pages. This
            combination of technologies ensures an accessible platform for users
            to track their activities and manage their life goals effectively.
          </p>
          <SkillsList>
            {techsUsed.map((skill, index) => (
              <SkillItem
                skill={skillsData[skill]}
                key={index}
                index={index}
                size="small"
              />
            ))}
          </SkillsList>
        </ProjectContentItem>
        <ProjectContentItem order={4}>
          <h2>Challenges and Problems</h2>
          <p>
            Like most of the projects, I ran into a few bumps along the way. The
            primary challenges in this project revolved around the asynchronous
            nature of the databases' APIs (IndexedDB and Realtime DB) and
            managing the state within the React hook of useState, which also
            operates asynchronously. It required careful coordination to ensure
            that the databases and app states interacted smoothly. To tackle
            this, I employed Promises and leveraged the useEffect hook to
            efficiently fetch and synchronize data.
            <br />
            The development of Lifemap also presented other challenges.
            Designing the logic for tracking tasks and habits proved to be a
            complex task. Furthermore managing numerous functions, components,
            and files demanded a high level of organization and attention to
            detail. As my largest project to date, I dedicated myself to
            ensuring that the codebase was reuseable, well-structured and
            organized.
          </p>
        </ProjectContentItem>
        <ProjectContentItem order={5}>
          <h2>Learnings</h2>
          <p>
            I could spend pages to describing the things i learned from this
            Project but shortly the important ones; Git management, and
            understanding how to communicate effectively with databases' API,
            async nature of state management in React and the power of reusable
            components, realizing their potential of efficiency and
            maintainability.
          </p>
          <img className="itemImage" src={LifemapSummaryGIF} alt="summaryGIF" />
          <LinksWrapper>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://berkaysson.github.io/lifemap/"
            >
              Try it now
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/berkaysson/lifemap"
            >
              GitHub Repo
            </a>
          </LinksWrapper>
        </ProjectContentItem>
        <ProjectContentItem order={6}>
          <h2>Summary</h2>
          <ul>
            <li className="summaryListItem">
              Utilized JavaScript, React.js, CSS, Material UI, and
              styled-components for development
            </li>
            <li className="summaryListItem">
              Implemented features for activity tracking, habit-building, task
              management, and financial tracking along their user friendly
              interfaces
            </li>
            <li className="summaryListItem">
              Integrated React Router for navigation and Firebase Auth for user
              authentication
            </li>
            <li className="summaryListItem">
              Implemented Firebase Realtime Database and IndexedDB for data
              storage and management
            </li>
            <li className="summaryListItem">
              Implemented asynchronous data fetches across IndexedDB, Firebase
              Realtime Database, and the Lifemap application
            </li>
          </ul>
        </ProjectContentItem>
      </ProjectLifemapWrapper>
      <HidingDiv id={"lifemapHideDiv"}>
        <Contact />
        <Footer />
      </HidingDiv>
    </ProjectLifemapContainer>
  );
};

export default ProjectLifemap;
