const ResearchProject = () => {
  const techStack = [
    "Python",
    "Streamlit",
    "LLM APIs",
    "Prompt Engineering",
    "API Integration",
    "Structured Outputs",
  ];

  return (
    <section
      className="technical-project research-project"
      id="research-assistant"
    >
      {/* PROJECT HEADER */}

      <div className="technical-project-header">
        <div className="project-index research-index">
          <span>03</span>
          <div></div>
          <span>RESEARCH AI</span>
        </div>

        <div className="project-title-row">
          <div>
            <h2>AI Research Assistant</h2>

            <p className="project-subtitle">
              An AI-powered research application that transforms
              research questions into structured and useful outputs.
            </p>
          </div>

          <div className="project-actions">
            <a
              href="https://github.com/ashwinloki/ai-research-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-secondary"
            >
              GitHub ↗
            </a>

            <a
              href="https://ai-research-assistant-66988375858.asia-south1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-primary"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>

      {/* PROBLEM */}

      <div className="project-overview-layout">
        <div className="project-summary">
          <span className="content-label">
            THE PROBLEM
          </span>

          <h3>
            Research information is often scattered and difficult
            to organize into useful insights.
          </h3>

          <p>
  Research questions often produce large amounts of unstructured
  information that require additional effort to interpret and organize.
  The AI Research Assistant uses structured prompting to guide the
  language model toward clearer, organized outputs that are easier
  to review and use.
</p>
        </div>

        <div className="project-meta">
          <div className="meta-item">
            <span>TYPE</span>
            <strong>LLM Application</strong>
          </div>

          <div className="meta-item">
            <span>FOCUS</span>
            <strong>Research Assistance</strong>
          </div>

          <div className="meta-item">
            <span>INTERFACE</span>
            <strong>Streamlit</strong>
          </div>
        </div>
      </div>

      {/* RESEARCH WORKFLOW */}

      <div className="architecture-block">
        <div className="architecture-heading">
          <span className="content-label">
            RESEARCH WORKFLOW
          </span>

          <h3>From research question to structured insight.</h3>

          <p>
  The application transforms a research question into structured model
  instructions, sends the constructed prompt through the LLM API, and
  processes the generated response into a clear research-oriented
  format for presentation.
</p>
        </div>

        <div className="architecture-flow">
          <div className="architecture-step">
            <span>01</span>

            <div>
              <strong>Research Query</strong>
              <p>User provides a topic or research question</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>02</span>

            <div>
              <strong>Prompt Construction</strong>
              <p>The request is prepared with structured instructions</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>03</span>

            <div>
              <strong>LLM Analysis</strong>
              <p>The model processes the research request</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>04</span>

            <div>
              <strong>Response Processing</strong>
              <p>Generated information is prepared for presentation</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>05</span>

            <div>
              <strong>Research Output</strong>
              <p>Structured results are displayed to the user</p>
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

          <h3>Designing the research experience.</h3>
        </div>

        <div className="decision-grid">
  <div className="decision-item">
    <span>01</span>

    <h4>Structured prompt orchestration</h4>

    <p>
      Research queries are transformed into explicit instructions that
      guide the model toward organized outputs instead of unrestricted
      conversational responses.
    </p>
  </div>

  <div className="decision-item">
    <span>02</span>

    <h4>Separated request pipeline</h4>

    <p>
      Query handling, prompt construction, model communication, and
      response formatting are treated as separate stages, keeping the
      application flow easier to understand and extend.
    </p>
  </div>

  <div className="decision-item">
    <span>03</span>

    <h4>Research-focused presentation</h4>

    <p>
      Generated responses are presented through a focused Streamlit
      interface designed around submitting research questions and
      reviewing structured results.
    </p>
  </div>
</div>
      </div>

      {/* TECH STACK */}

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

export default ResearchProject;