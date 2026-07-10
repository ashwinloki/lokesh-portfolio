const Journey = () => {
  const journeySteps = [
    {
      number: "01",
      title: "UI/UX & Product Design",
      description:
        "Started by designing user-centered digital products, learning how research, usability, and product thinking shape better experiences.",
    },
    {
      number: "02",
      title: "Learning & Building with AI",
      description:
        "Expanded into Python, prompt engineering, LLM applications, RAG systems, and AI workflows through hands-on projects.",
    },
    {
      number: "03",
      title: "AI Engineering",
      description:
        "Now focused on building practical AI applications, designing intelligent system architectures, and deploying containerized applications to the cloud.",
    },
  ];

  return (
    <section className="journey-section" id="journey">
      <div className="journey-header">
        <div className="section-label">
          MY JOURNEY
          <span></span>
        </div>

        <h2>
          From designing experiences to building intelligence.
        </h2>
      </div>

      <div className="journey-track">
        {journeySteps.map((step, index) => (
          <div className="journey-step" key={step.number}>
            <div className="journey-marker">
              <span>{step.number}</span>
            </div>

            <div className="journey-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            {index < journeySteps.length - 1 && (
              <div className="journey-line"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;