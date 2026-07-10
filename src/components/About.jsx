const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <div className="section-label">
          ABOUT ME
          <span></span>
        </div>

        <h2>
          Building AI with a
          <br />
          product mindset.
        </h2>
      </div>

      <div className="about-content">
        <p className="about-intro">
  I’m Lokesh, an AI Engineer focused on building practical AI
  applications. My work explores how LLMs, retrieval systems, and
  intelligent workflows can be turned into useful, deployable products.
</p>

<p className="about-secondary">
  Before moving into AI engineering, I worked with UI/UX and product
  design. That experience shapes how I approach AI systems today —
  combining technical problem-solving with attention to usability,
  clarity, and the people interacting with the product.
</p>

        <div className="about-focus">
          <span>LLM Applications</span>
          <span>RAG Systems</span>
          <span>AI Workflows</span>
          <span>Product Thinking</span>
        </div>
      </div>
    </section>
  );
};

export default About;