import PipelineVisual from "./PipelineVisual";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
  <p className="hero-introduction">HI, I’M</p>

  <h1 className="hero-name">
    Lokesh<span>.</span>
  </h1>

  <h2 className="hero-title">
    AI Engineer building{" "}
    <span className="gradient-text">intelligent systems</span>
    <br />
    for real problems.
  </h2>

  <p className="hero-description">
    I build practical LLM applications, RAG systems, and AI workflows,
    <br className="desktop-break" />
    shaped by a background in user-centered product design.
  </p>

  <div className="hero-actions">
    <a href="#projects" className="primary-btn">
      View My Work <span>↗</span>
    </a>

    <a href="#contact" className="secondary-btn">
      Contact Me <span>↗</span>
    </a>
  </div>
</div>

      <PipelineVisual />
    </section>
  );
};

export default Hero;