import {
  FaPython,
  FaDocker,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiFastapi,
  SiGooglecloud,
  SiStreamlit,
  SiHuggingface,
} from "react-icons/si";

import {
  TbBrain,
  TbRoute,
} from "react-icons/tb";

const iconMap = {
  Python: { icon: FaPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Docker: { icon: FaDocker, color: "#2496ED" },
  Streamlit: { icon: SiStreamlit, color: "#FF4B4B" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  "Hugging Face": { icon: SiHuggingface, color: "#FFD21E" },

  RAG: { icon: TbBrain, color: "#7C3AED" },
  FAISS: { icon: FaDatabase, color: "#6B7280" },
  "Sentence Transformers": { icon: TbBrain, color: "#8B5CF6" },
  OpenRouter: { icon: TbRoute, color: "#6366F1" },

  GitHub: { icon: FaGithub, color: "#181717" },
};

export default function TechBadge({ tech }) {
  const item = iconMap[tech];
  const Icon = item?.icon;

  return (
    <span className="tech-badge">
      {Icon && (
        <Icon
          className="tech-icon"
          style={{ color: item.color }}
        />
      )}
      <span>{tech}</span>
    </span>
  );
}