import { projectDetails } from "../data/projectDetails";

const ProjectOverview = () => {
  return (
    <section className="projects-overview-new" id="all-projects">
      <div className="projects-overview-grid-new">
        {projectDetails.map((project) => (
          <a
            href={`#${project.id}`}
            className={`projects-overview-card ${project.accent}`}
            key={project.id}
          >
            <div className="overview-top">
              <span className="overview-number">
                {project.number}
              </span>

              <span className="overview-category">
                {project.category}
              </span>
            </div>

            <div className="overview-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="overview-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="overview-arrow">
              ↓
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectOverview;