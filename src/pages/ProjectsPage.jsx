import Navbar from "../components/Navbar";
import ProjectOverview from "../components/ProjectOverview";
import DesignWork from "../components/DesignWork";
import PranaProject from "../components/PranaProject";
import WorkflowProject from "../components/WorkflowProject";
import ResearchProject from "../components/ResearchProject";
import Contact from "../components/Contact";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="projects-hero">
          <div className="section-label">
            SELECTED AI WORK
            <span></span>
          </div>

          <div className="projects-hero-layout">
            <h1>
              Building intelligent
              <br />
              systems that solve
              <br />
              <span>real problems.</span>
            </h1>

            <div className="projects-hero-description">
              <p>
                A closer look at the AI applications I've built,
                including their architecture, engineering decisions,
                challenges, and deployment.
              </p>

              <div className="project-count">
                <strong>03</strong>

                <span>
                  FEATURED
                  <br />
                  AI PROJECTS
                </span>
              </div>
            </div>
          </div>
        </section>

        <ProjectOverview />

        <DesignWork />

        <section className="deep-dives-intro">
          <div className="section-label">
            TECHNICAL DEEP DIVES
            <span></span>
          </div>

          <div className="deep-dives-heading">
            <h2>
              Inside the systems
              <br />
              behind the projects.
            </h2>

            <p>
              Architecture, engineering decisions, and technologies
              behind each AI application.
            </p>
          </div>
        </section>

        <PranaProject />

        <WorkflowProject />

        <ResearchProject />

        <Contact />
      </main>
    
    </>
  );
};

export default ProjectsPage;