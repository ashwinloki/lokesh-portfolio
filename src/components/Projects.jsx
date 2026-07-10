import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <div>
          <div className="section-label">
            SELECTED WORK
            <span></span>
          </div>

          <h2>AI Projects</h2>
        </div>

        <Link to="/projects" className="view-all">
          View All Projects <span>↗</span>
        </Link>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className={`project-icon icon-${project.id}`}>
              {project.icon}
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <span
                className={`project-category category-${project.id}`}
              >
                {project.category}
              </span>

              <p>{project.description}</p>

              <Link
                to={`/projects#${project.id}`}
                className="project-link"
              >
                View Project <span>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;