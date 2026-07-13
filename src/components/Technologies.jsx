import {
  FaPython,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";

import {
  SiFastapi,
  SiGooglecloud,
  SiStreamlit,
} from "react-icons/si";

import {
  TbBrain,
  TbRoute,
} from "react-icons/tb";
import { technologies } from "../data/technologies";

const techIcons = {
  Python: {
    icon: FaPython,
    color: "#3776AB",
  },

  FastAPI: {
    icon: SiFastapi,
    color: "#009688",
  },

  Streamlit: {
    icon: SiStreamlit,
    color: "#FF4B4B",
  },

  OpenRouter: {
    icon: TbRoute,
    color: "#6366F1",
  },

  RAG: {
    icon: TbBrain,
    color: "#8B5CF6",
  },

  "Sentence Transformers": {
    icon: TbBrain,
    color: "#A855F7",
  },

  FAISS: {
    icon: FaDatabase,
    color: "#64748B",
  },

  Docker: {
    icon: FaDocker,
    color: "#2496ED",
  },

  "Google Cloud": {
    icon: SiGooglecloud,
    color: "#4285F4",
  },
};

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
  {(() => {
    const item = techIcons[technology.name];

    if (!item) return technology.short;

    const Icon = item.icon;

    return (
      <Icon
        className="technology-logo"
        style={{ color: item.color }}
      />
    );
  })()}
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