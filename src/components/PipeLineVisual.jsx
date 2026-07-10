const PipelineVisual = () => {
  return (
    <div className="pipeline-visual">
      <div className="visual-title">
        <span className="status-dot purple"></span>
        <span>AI SYSTEM PIPELINE</span>
      </div>

      <div className="pipeline-list">
        <div className="pipeline-item">
          <span className="step-number">01</span>
          <span className="step-name">User Input</span>
        </div>

        <div className="pipeline-connector">
          <span></span>
        </div>

        <div className="pipeline-item">
          <span className="step-number">02</span>
          <span className="step-name">AI Processing</span>
        </div>

        <div className="pipeline-connector">
          <span></span>
        </div>

        <div className="pipeline-item">
          <span className="step-number">03</span>
          <span className="step-name">Intelligent Output</span>
        </div>
      </div>

      <div className="design-process">
        <div className="design-title-row">
          <div className="visual-title">
            <span className="status-dot pink"></span>
            <span>UI/UX DESIGN</span>
          </div>

          <div className="title-line"></div>
        </div>

        <div className="design-flow">
          <div className="design-stage">
            <div className="design-icon">⌕</div>
            <span>Research</span>
          </div>

          <span className="flow-arrow">→</span>

          <div className="design-stage">
            <div className="design-icon">✎</div>
            <span>Design</span>
          </div>

          <span className="flow-arrow">→</span>

          <div className="design-stage">
            <div className="design-icon">✓</div>
            <span>Test</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineVisual;