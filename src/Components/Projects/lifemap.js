import { theme } from "../../Styles/theme";
import Contact from "../Contact";
import Footer from "../Footer";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import LifemapLogo from "../../Images/lifemap/LifemapLogo";
import ProjectContentItem from "./ProjectContentItem";

const ProjectLifemapContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ProjectLifemapWrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.xlg};
  border: 1px solid red;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.sizes.md};
  }
`;

const ProjectHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10%;
  gap: ${({ theme }) => theme.sizes.md};

  svg {
    height: 50px;
  }

  h2 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
`;

const ProjectLifemap = () => {
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
          <img src="" alt="projectOverviewImg" />
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
          <img src="" alt="purposeImg" />
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
          <img src="" alt="techImg" />
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
          <img src="" alt="challengesImg" />
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
          <img src="" alt="learningsImg" />
        </ProjectContentItem>
        <ProjectContentItem order={6}>
          <h2>Summary</h2>
          <ul>
            <li>
              Utilized JavaScript, React.js, CSS, Material UI, and
              styled-components for development
            </li>
            <li>
              Implemented features for activity tracking, habit-building, task
              management, and financial tracking along their user friendly
              interfaces
            </li>
            <li>
              Integrated React Router for navigation and Firebase Auth for user
              authentication
            </li>
            <li>
              Implemented Firebase Realtime Database and IndexedDB for data
              storage and management
            </li>
            <li>
              Implemented asynchronous data fetches across IndexedDB, Firebase
              Realtime Database, and the Lifemap application
            </li>
          </ul>
          <img src="" alt="summaryImg" />
        </ProjectContentItem>
      </ProjectLifemapWrapper>
      <Contact />
      <Footer />
    </ProjectLifemapContainer>
  );
};

export default ProjectLifemap;
