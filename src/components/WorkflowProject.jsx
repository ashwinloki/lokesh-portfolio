const WorkflowProject = () => {
  const techStack = [
    "Python",
    "FastAPI",
    "Streamlit",
    "OpenRouter",
    "Pydantic",
    "Docker",
    "Google Cloud Run",
  ];

  return (
    <section
      className="technical-project workflow-project"
      id="workflow-agent"
    >
      {/* PROJECT HEADER */}

      <div className="technical-project-header">
        <div className="project-index workflow-index">
          <span>02</span>
          <div></div>
          <span>AI AUTOMATION</span>
        </div>

        <div className="project-title-row">
          <div>
            <h2>Workflow Agent AI</h2>

            <p className="project-subtitle">
              An AI workflow system that interprets user goals and
              transforms them into structured, actionable plans.
            </p>
          </div>

          <div className="project-actions">
            <a
              href="https://github.com/ashwinloki/workflow-agent-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-secondary"
            >
              GitHub ↗
            </a>

            <a
              href="https://workflow-agent-frontend-66988375858.asia-south1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-primary"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>

      {/* PROBLEM + PROJECT INFORMATION */}

      <div className="project-overview-layout">
        <div className="project-summary">
          <span className="content-label">
            THE PROBLEM
          </span>

          <h3>
            Turning a high-level goal into a clear workflow
            usually requires manual planning.
          </h3>

          <p>
  High-level goals are often ambiguous and require manual decomposition
  before they can be acted on. Workflow Agent AI explores how an LLM
  can interpret a user's objective, identify the required stages, and
  transform the goal into a structured sequence of actionable steps.
</p>
        </div>

        <div className="project-meta">
          <div className="meta-item">
            <span>TYPE</span>
            <strong>AI Workflow Agent</strong>
          </div>

          <div className="meta-item">
            <span>ARCHITECTURE</span>
            <strong>Frontend + API + LLM</strong>
          </div>

          <div className="meta-item">
            <span>DEPLOYMENT</span>
            <strong>Google Cloud Run</strong>
          </div>
        </div>
      </div>

      {/* WORKFLOW ARCHITECTURE */}

      <div className="architecture-block">
        <div className="architecture-heading">
          <span className="content-label">
            AGENT WORKFLOW
          </span>

          <h3>From goal to structured workflow.</h3>

          <p>
  The user objective is validated by the API layer and passed to a
  dedicated LLM service, where prompt instructions guide the model to
  decompose the goal into an organized workflow before returning the
  structured result to the interface.
</p>
        </div>

        <div className="architecture-flow workflow-flow">
          <div className="architecture-step">
            <span>01</span>

            <div>
              <strong>User Goal</strong>
              <p>A high-level objective entered by the user</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>02</span>

            <div>
              <strong>API Request</strong>
              <p>FastAPI validates and receives the request</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>03</span>

            <div>
              <strong>LLM Processing</strong>
              <p>The goal is interpreted using the LLM service</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>04</span>

            <div>
              <strong>Workflow Generation</strong>
              <p>Actionable steps are generated and organized</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>05</span>

            <div>
              <strong>Structured Result</strong>
              <p>The generated workflow is returned to the user</p>
            </div>
          </div>
        </div>
      </div>

      {/* ENGINEERING DECISIONS */}

      <div className="engineering-section">
        <div className="engineering-intro">
          <span className="content-label">
            ENGINEERING DECISIONS
          </span>

          <h3>How the system was structured.</h3>
        </div>

        <div className="decision-grid">
  <div className="decision-item">
    <span>01</span>

    <h4>Dedicated LLM service layer</h4>

    <p>
      Model communication and prompt logic are isolated from the API
      routes, keeping the AI processing layer modular and making model
      integrations easier to modify or extend.
    </p>
  </div>

  <div className="decision-item">
    <span>02</span>

    <h4>Validated API contracts</h4>

    <p>
      FastAPI and Pydantic are used to define and validate request
      structures before user objectives are passed into the AI
      processing pipeline.
    </p>
  </div>

  <div className="decision-item">
    <span>03</span>

    <h4>Independent cloud services</h4>

    <p>
      The frontend and backend are containerized and deployed as
      separate Cloud Run services, allowing the interface and API
      layers to be updated and managed independently.
    </p>
  </div>
</div>
      </div>

      {/* TECHNOLOGY STACK */}

      <div className="project-stack">
        <span className="content-label">
          TECHNOLOGY STACK
        </span>

        <div className="stack-list">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowProject;