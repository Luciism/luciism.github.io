import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { AppDataContext } from "DataContext";
import "./ProjectCard.css";


const ProjectCard = ({project, index}) => {
  const appData = useContext(AppDataContext);

  return (
    <div className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
      <Link
        className="content"
        to={project.customSlug || `/projects/${project.id}`}
      >
        <div className="cover-img-wrapper">
          <img
            className="cover-img"
            src={project.images.cover}
            alt={`Cover ${"image"} for ${project.name}`}
          />
        </div>
        <div className="info">
          <div className="text">
            <h3 className="title-medium">{project.name}</h3>
            <p className="body-medium color-text-secondary">
              {project.description.short}
            </p>
          </div>
          <div className="tech-chips">
            {project.tools.map((tool, i) => {
              const toolData = appData.availableTools.find(
                (t) => t.id === tool.id
              );

              return (
                <div
                  className="body-small technology-chip"
                  style={{ "--chip-color": toolData.rgb }}
                  key={i}
                >
                  <img src={toolData.icon} alt={toolData.name} />
                  {toolData.name}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
      <div className="buttons">
        <Link
          to={project.sourceUrl}
          className={`padded-btn small ${project.sourceUrl ? "" : "disabled"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:github" width={20} height={20} />
          <span>Source</span>
        </Link>
        <Link
          to={project.demoUrl}
          className={`padded-btn small tonal ${
            project.demoUrl ? "" : "disabled"
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="lsicon:open-new-filled" width={20} height={20} />
          <span>Live Demo</span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
