const DesignWork = () => {
  return (
    <section className="design-work-section" id="design-work">
      <div className="design-work-header">
        <div>
          <div className="section-label design-label">
            DESIGN WORK
            <span></span>
          </div>

          <h2>Selected UI/UX Work</h2>

          <p>
            Product design case studies across healthcare,
            fitness, and creative digital experiences.
          </p>
        </div>

        <a
          href="https://www.behance.net/Lokesh14"
          target="_blank"
          rel="noopener noreferrer"
          className="behance-link"
        >
          View on Behance
          <span>↗</span>
        </a>
      </div>

      <a
        href="https://www.behance.net/Lokesh14"
        target="_blank"
        rel="noopener noreferrer"
        className="design-showcase"
        aria-label="View UI UX case studies on Behance"
      >
        <div className="showcase-placeholder">
          <div className="showcase-content">
            <span>SELECTED CASE STUDIES</span>

            <h3>
              Research. Design.
              <br />
              Meaningful experiences.
            </h3>

            <p>
              Virtual Gym Trainer · Care Hospital · Photography Studio
            </p>
          </div>

          <div className="showcase-arrow">↗</div>
        </div>
      </a>
    </section>
  );
};

export default DesignWork;