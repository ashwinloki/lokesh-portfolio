const PranaProject = () => {
  const techStack = [
    "Python",
    "FastAPI",
    "Streamlit",
    "RAG",
    "Sentence Transformers",
    "FAISS",
    "OpenRouter",
    "Docker",
    "Google Cloud",
  ];

  return (
    <section className="technical-project prana-project" id="prana-ai">
      <div className="technical-project-header">
        <div className="project-index">
          <span>01</span>
          <div></div>
          <span>HEALTHCARE AI</span>
        </div>

        <div className="project-title-row">
          <div>
            <h2>Prana AI</h2>

            <p className="project-subtitle">
              A document-grounded healthcare assistant built using
              Retrieval-Augmented Generation.
            </p>
          </div>

          <div className="project-actions">
            <a
              href="https://github.com/ashwinloki/prana-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-secondary"
            >
              GitHub ↗
            </a>

            <a
              href="https://prana-ai-frontend-66988375858.asia-south1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-primary"
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>

      <div className="project-overview-layout">
        <div className="project-summary">
          <span className="content-label">THE PROBLEM</span>

          <h3>
            Generic AI responses are not enough for
            document-grounded healthcare information.
          </h3>

          <p>
            <p>
               General-purpose language models can produce responses from broad
               training knowledge, which is not ideal when an application needs
               answers grounded in a specific set of documents. Prana AI addresses
               this by retrieving relevant information from a controlled medical
               knowledge base before generating a response.
           </p>
          </p>
        </div>

        <div className="project-meta">
          <div className="meta-item">
            <span>TYPE</span>
            <strong>RAG Application</strong>
          </div>

          <div className="meta-item">
            <span>DOMAIN</span>
            <strong>Healthcare AI</strong>
          </div>

          <div className="meta-item">
            <span>DEPLOYMENT</span>
            <strong>Google Cloud Run</strong>
          </div>
        </div>
      </div>

      <div className="architecture-block">
        <div className="architecture-heading">
          <span className="content-label">SYSTEM ARCHITECTURE</span>

          <h3>From question to grounded response.</h3>

          <p>
  Medical documents are processed into semantic embeddings and stored
  in a FAISS vector index. At query time, the system retrieves the most
  relevant document chunks and injects them into the LLM prompt as
  supporting context.
</p>
        </div>

        <div className="architecture-flow">
          <div className="architecture-step">
            <span>01</span>
            <div>
              <strong>Medical Documents</strong>
              <p>Approved PDF knowledge source</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>02</span>
            <div>
              <strong>Chunking</strong>
              <p>Documents split into searchable passages</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>03</span>
            <div>
              <strong>Embeddings</strong>
              <p>Text converted into semantic vectors</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>04</span>
            <div>
              <strong>FAISS Search</strong>
              <p>Relevant chunks retrieved by similarity</p>
            </div>
          </div>

          <div className="architecture-arrow">→</div>

          <div className="architecture-step">
            <span>05</span>
            <div>
              <strong>LLM Response</strong>
              <p>Answer generated using retrieved context</p>
            </div>
          </div>
        </div>
      </div>

      <div className="engineering-section">
        <div className="engineering-intro">
          <span className="content-label">ENGINEERING DECISIONS</span>

          <h3>Why this architecture?</h3>
        </div>

        <div className="decision-grid">
          <div className="decision-item">
            <span>01</span>

            <h4>RAG over generic LLM responses</h4>

            <p>
              Retrieval adds relevant document context before generation,
              allowing answers to stay connected to the application's
              knowledge base.
            </p>
          </div>

          <div className="decision-item">
            <span>02</span>

            <h4>Semantic search with FAISS</h4>

            <p>
              Queries and document chunks are compared through vector
              similarity, allowing retrieval based on meaning rather
              than exact keyword matching.
            </p>
          </div>

          <div className="decision-item">
  <span>03</span>

  <h4>Modular AI pipeline</h4>

  <p>
    Document processing, embedding generation, vector retrieval, prompt
    construction, and response generation are separated into distinct
    stages, making the system easier to test, debug, and extend.
  </p>
</div>
        </div>
      </div>

      <div className="project-stack">
        <span className="content-label">TECHNOLOGY STACK</span>

        <div className="stack-list">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PranaProject;