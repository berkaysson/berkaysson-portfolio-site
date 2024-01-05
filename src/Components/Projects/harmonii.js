import { theme } from "../../Styles/theme";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import ProjectContentItem from "./ProjectContentItem";
import HidingDiv from "../Wrappers/Effects/HidingDiv";
import SkillItem from "../Sections/Skills/SkillItem";
import { skillsData } from "../Sections/Skills/skillsData";
import SkillsList from "../Sections/Skills/SkillsList";
import HarmoniiLaunch from "../../Images/harmonii/harmonii_launch.png";
import HarmoniiSummary from "../../Images/harmonii/harmoniiSummary.gif";

const ProjectHarmoniiContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 150px;

  @media (max-width: 425px) {
    padding-top: 180px;
  }
`;

const ProjectHarmoniiWrapper = styled.div`
  padding: ${({ theme }) => theme.sectionPadding};
  background-color: ${({ theme }) => theme.colors.black};
  padding-bottom: 3rem;
  border-bottom-left-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom-right-radius: ${({ theme }) => theme.borders.roundedLg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lighter};
  box-shadow: rgba(190, 229, 242, 0.45) 0px 5px 8px -5px;

  @media (max-width: 768px) {
    padding: .7rem 1.2rem;
  }

  @media (max-width: 420px){
    padding: .5rem 1rem;
  }
`;

const ProjectHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

    &:first-child{
      color: orange;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1.5rem;
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
    color: #abc4fe;
    text-shadow: 0px 0px 5px black;

    &:first-child {
      color: #fc6d01;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

const ProjectHarmonii = () => {
  const techsUsed = [
    "javaScript",
    "react",
    "css",
    "styledComponents",
    "azure",
    "reactRouter",
    "aspNet",
    "firebase",
    "framerMotion",
    "msSql",
    "axios",
  ];
  return (
    <ProjectHarmoniiContainer
      initial={theme.framerAnimations.pageTransition.initial}
      animate={theme.framerAnimations.pageTransition.animate}
      exit={theme.framerAnimations.pageTransition.exit}
      transition={theme.framerAnimations.pageTransition.transition}
      theme={theme}
    >
      <ProjectHarmoniiWrapper theme={theme}>
        <ProjectHeaderWrapper theme={theme}>
          <h2>harmonii</h2>
          <h2>Front&Back end development</h2>
        </ProjectHeaderWrapper>
        <ProjectContentItem order={1}>
          <h2>Project Overview</h2>
          <p>
            The Harmonii Music App is a dynamic full-stack project that enables
            users to discover, stream, and curate playlists of their favorite
            music. Leveraging React.js for the frontend and Asp.Net with Entity
            Framework and MsSQL for the backend, it incorporates robust user
            authentication and authorization mechanisms, including distinct
            roles for users. Admin users possess the ability to confirm user
            accounts, assign moderator roles, and manage user accounts, while
            moderators can handle song additions and deletions. Standard users
            have the capability to create playlists and enjoy music streaming.
            This comprehensive platform, hosted on Azure, delivers an immersive
            music experience with a clear path for future enhancements and user
            engagement features.
          </p>
          </ProjectContentItem>
          <ProjectContentItem order={2}>
            <img
              className="itemImage"
              src={HarmoniiLaunch}
              alt="projectOverviewImg"
            />
        </ProjectContentItem>
        <ProjectContentItem order={3}>
          <h2>Purpose and Inspiration</h2>
          <p>
            The Harmonii Music App stands as the culmination of my internship
            journey at KoçSistem, primarily aimed at fostering my expertise in
            backend development using C# with ASP.NET while gaining practical
            insights into Azure services. Motivated by the desire to expand my
            skill set, this project served as a dynamic learning platform to
            delve deep into backend architecture and designin realational
            databases. It epitomizes a quest for hands-on experience in backend
            technologies within the Azure ecosystem, driving my exploration and
            growth as a developer while contributing to a functional and
            immersive music app experience.
          </p>
        </ProjectContentItem>
        <ProjectContentItem order={4}>
          <h2>Technologies</h2>
          <p>
            The Harmonii Music App implements a robust tech stack to power its
            functionalities, incorporating ASP.NET for the backend architecture
            and React for the frontend interface. Leveraging Entity Framework
            alongside MSSQL ensures efficient database management, while ASP.NET
            Identity and JWT forms the backbone for authentication and
            authorization protocols. On the frontend, React Router facilitates
            SPA navigation, Axios handles HTTP requests to the backend, and
            Styled Components streamline the UI presentation. The Harmonii Music
            App is deployed on Azure, utilizing SQL Server, API Management, App
            Service, and Application Insights, ensuring scalable, and monitored
            environment for functionality and performance optimization.
            Additionally, the integration of Firebase Cloud Storage enhances the
            app's capabilities by efficiently storing and managing audio files.
          </p>
          </ProjectContentItem>
          <ProjectContentItem order={5}>
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
        <ProjectContentItem order={6}>
          <h2>Challenges and Problems</h2>
          <p>
            Navigating authentication and authorization complexities, the
            project successfully implemented a secure token exchange system
            using JWT alongside ASP.NET Identity. Additionally, optimizing audio
            file streaming posed a challenge, elegantly resolved by integrating
            Firebase Cloud Storage on the frontend. These solutions not only
            fortified user access control but also streamlined the management
            and playback of audio content, enhancing the overall user experience
            within the application.
          </p>
        </ProjectContentItem>
        <ProjectContentItem order={7}>
          <h2>Learnings</h2>
          <p>
            During the Harmonii Music App's development, I honed my backend
            skills and gained proficiency in relational database design,
            implementing normalization rules and structuring relationships in
            MSSQL by using Entity Framework Core. Connecting the frontend and
            backend while consuming RESTful APIs taught me the importance of
            creating concise and efficient endpoints. Azure deployment provided
            insights into scalable hosting, while leveraging Firebase Cloud
            Storage expanded my understanding of effective file storage
            solutions. This journey deepened my backend expertise and improve
            the crucial synergy between frontend and backend components for
            cohesive application development.
          </p>
          </ProjectContentItem>
          <ProjectContentItem order={8}>
            <img className="itemImage" src={HarmoniiSummary} alt="summaryGIF" />
            <LinksWrapper>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://harmoniiserver20240101185412.azurewebsites.net/login"
              >
                Try it now
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/berkaysson/harmonii-music-app"
              >
                GitHub Repo
              </a>
            </LinksWrapper>
        </ProjectContentItem>
        <ProjectContentItem order={9}>
          <h2>Summary</h2>
          <ul>
            <li className="summaryListItem">
              Implemented backend functionalities using C# with ASP.NET.
            </li>
            <li className="summaryListItem">
              Designed, normalized and managed relational databases with Entity
              Framework Core and MSSQL.
            </li>
            <li className="summaryListItem">
              Integrated user authentication and authorization using ASP.NET
              Identity and JWT.
            </li>
            <li className="summaryListItem">
              Developed the frontend using React.js, incorporating React Router
              for navigation.
            </li>
            <li className="summaryListItem">
              Established RESTful API endpoints and axios instances for
              communication between frontend and backend.
            </li>
            <li className="summaryListItem">
              Deployed the application on Azure, utilizing SQL Server, API
              Management, App Service, and Application Insights.
            </li>
            <li className="summaryListItem">
              Utilized Firebase Cloud Storage for efficient audio file storage
              and management.
            </li>
          </ul>
        </ProjectContentItem>
      </ProjectHarmoniiWrapper>
      <HidingDiv id={"harmoniiHideDiv"}>
        <Contact />
        <Footer />
      </HidingDiv>
    </ProjectHarmoniiContainer>
  );
};

export default ProjectHarmonii;
