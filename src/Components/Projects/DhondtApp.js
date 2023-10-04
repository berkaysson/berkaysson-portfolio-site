import { theme } from "../../Styles/theme";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import ProjectContentItem from "./ProjectContentItem";
import HidingDiv from "../Wrappers/Effects/HidingDiv";
import DhondtAppLaunch from "../../Images/dhondt/dhondt-launch.png";
import SkillsList from "../Sections/Skills/SkillsList";
import SkillItem from "../Sections/Skills/SkillItem";
import { skillsData } from "../Sections/Skills/skillsData";

const ProjectDhondtAppContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 150px;

  @media (max-width: 425px){
    padding-top: 180px;
  }
`;

const ProjectDhondtAppWrapper = styled.div`
  padding: ${({ theme }) => theme.sectionPadding};
  background-color: ${({ theme }) => theme.colors.darker};
  padding-bottom: 3rem;
  border-bottom-left-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom-right-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lighter};
  box-shadow: rgba(190,229,242, 0.45) 0px 5px 8px -5px;

  @media (max-width: 768px) {
  }
`;

const ProjectHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.theme};

    @media (max-width: 425px) {
      font-size: 2rem;
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

const ProjectDhondtApp = () => {
  const techsUsed = [
    "javaScript",
    "react",
    "css",
    "styledComponents",
  ];
  return (
    <ProjectDhondtAppContainer
      initial={theme.framerAnimations.pageTransition.initial}
      animate={theme.framerAnimations.pageTransition.animate}
      exit={theme.framerAnimations.pageTransition.exit}
      transition={theme.framerAnimations.pageTransition.transition}
      theme={theme}
    >
      <ProjectDhondtAppWrapper theme={theme}>
        <ProjectHeaderWrapper theme={theme}>
          <h1>D'Hondt System Calculator</h1>
          <h2>Front-end and application development</h2>
        </ProjectHeaderWrapper>
        <ProjectContentItem order={1}>
          <h2>Project Overview</h2>
          <p>
            The "D'Hondt System Calculator" is a web application that is
            dedicated to simplifying the intricate D'Hondt method, a
            mathematical approach used in proportional representation voting
            systems, to provide users with a user-friendly tool. Through this
            application, individuals, including political analysts, students,
            and election enthusiasts, can gain a comprehensive understanding of
            seat allocations in multi-party elections. Additionally, the
            application includes a database of the 2023 Turkish General
            Election, allowing users to simulate this election on a
            district-by-district basis.
          </p>
          <img src={DhondtAppLaunch} alt="projectOverviewImg" className="itemImage" />
        </ProjectContentItem>
        <ProjectContentItem order={2}>
          <h2>Purpose and Inspiration</h2>
          <p>
            The inspiration behind the D'Hondt System Calculator project lies in
            the desire to demystify the intricacies of the D'Hondt method and
            make it accessible to a wider audience. The purpose is to bridge the
            gap between the complexity of the mathematical algorithm and its
            practical application in real-world scenarios. By providing a
            straightforward tool, the project aims to promote transparency and
            understanding of political processes, ultimately fostering informed
            decision-making in electoral systems.
          </p>
        </ProjectContentItem>
        <ProjectContentItem order={3}>
          <h2>Technologies</h2>
          <p>
            The D'Hondt System Calculator is built using React for the user
            interface and styled-components for design and layout. The core
            D'Hondt calculations are implemented in JavaScript, ensuring
            accuracy in simulating seat allocations in proportional
            representation voting systems. Additionally, the application
            efficiently handles vast amounts of election data, exceeding 6000
            lines, stored in JSON format, allowing users to simulate 2023
            elections in Turkey with a wealth of real-world data.
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
            Creating a precise algorithm for the D'Hondt system was the initial
            challenge. To address this, I employed mathematical principles and
            utilized JavaScript's looping capabilities to implement the
            intricate calculations. This approach allowed me to ensure accuracy
            in simulating seat allocations.
            <br />
            Another significant challenge was obtaining the data required for
            the 2023 Turkish General Election. Since the D'Hondt system
            allocates seats by district, I needed precise data on the number of
            seats in each district and the names of parliamentary candidates for
            each political party. Initially, I reached out to various sources to
            acquire this data, but faced difficulties. Eventually, I managed to
            obtain the data in Excel tables. To make it usable for the project,
            I converted it into CSV format and developed a custom algorithm to
            transform the CSV into JSON with the desired data structure. This
            process resulted in a comprehensive dataset with over 6000 lines,
            containing the names and seat numbers for each district in a
            well-organized JSON format, ready for integration into the
            application.
          </p>
        </ProjectContentItem>
        <ProjectContentItem order={5}>
          <h2>Learnings</h2>
          <p>
            This project enabled me to the conversion of CSV files into
            structured JSON data, enhancing my data manipulation skills.
            Moreover, I improve my React and styled-components expertise,
            improving my front-end development capabilities. In essence, the
            D'Hondt System Calculator provided practical experience and valuable
            skills for solving real-world software development challenges.
          </p>
        </ProjectContentItem>
        <ProjectContentItem order={6}>
          <h2>Summary</h2>
          <ul>
            <li>
              Implemented precise D'Hondt seat allocation algorithm using
              JavaScript and mathematical principles.
            </li>
            <li>
              Enhanced data manipulation skills through CSV-to-JSON conversion
              for efficient data processing.
            </li>
            <li>
              Improved proficiency in React and styled-components, creating a
              visually appealing and user-friendly application interface.
            </li>
            <li>
              Provided a valuable hands-on experience in solving real-world
              challenges in software development, contributing to ongoing growth
              as a developer and problem solver.
            </li>
          </ul>
        </ProjectContentItem>
      </ProjectDhondtAppWrapper>
      <HidingDiv id={"lifemapHideDiv"}>
        <Contact />
        <Footer />
      </HidingDiv>
    </ProjectDhondtAppContainer>
  );
};

export default ProjectDhondtApp;
