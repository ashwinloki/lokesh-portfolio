import { technologies } from "../data/technologies";

const Technologies = () => {
  return (
    <section className="technologies-section">
      <div className="technologies-header">
        <div className="section-label">
          TECHNOLOGIES
          <span></span>
        </div>

        <h2>Technologies I Work With</h2>

        <p>
          Tools and technologies I use to build AI applications,
          intelligent workflows, and production-ready systems.
        </p>
      </div>

      <div className="technology-grid">
        {technologies.map((technology) => (
          <div className="technology-item" key={technology.name}>
            <div className="technology-symbol">
              {technology.short}
            </div>

            <div>
              <h3>{technology.name}</h3>
              <span>{technology.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;