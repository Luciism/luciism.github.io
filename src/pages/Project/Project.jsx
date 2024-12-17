import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useContext } from "react";

import { AppDataContext } from "DataContext";
import Heading from "components/Heading/Heading";
import ToolChips from "components/ToolChips/ToolChips";
import "./Project.css"


const ProjectImagesGrid = ({images}) => {
  return (
    <div className="project-images-grid">
      {images.map((image, i) => (
        <img key={i} src={image} alt="" />
      ))}
    </div>
  );
}


const ProjectPage = ({project}) => {
  const appData = useContext(AppDataContext);

  const tools = project.tools.map((tool) =>
    appData.availableTools.find((t) => t.id === tool.id)
  );

  return (
    <div className="project-page">
      <div
        className="project-intro-wrapper"
        style={{ backgroundImage: `url(${project.images.background})` }}
      >
        <section id="intro" className="project-intro-section page-margins">
          <div className="text">
            <h1 className="uppercase">{project.name}</h1>
            <p className="body-base color-text-secondary">
              {project.description.short}
            </p>
          </div>
          <div className="buttons">
            <Link
              to={project.sourceUrl}
              className={`padded-btn small ${
                project.sourceUrl ? "" : "disabled"
              }`}
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
        </section>
      </div>
      <section
        id="about"
        className="project-about-section page-margins standard-section"
      >
        <Heading>
          <h2>About</h2>
        </Heading>
        <div className="about-info headed-info">
          <h3 className="subheading">Overview</h3>
          <p
            className="body-base color-text-secondary"
            style={{ whiteSpace: "pre-line" }}
          >
            {project.description.long}
          </p>
        </div>
        <div className="about-info headed-info">
          <h3 className="subheading">Tools Used</h3>
          <ToolChips tools={tools} />
        </div>
      </section>
      <section
        id="images"
        className="project-images-section page-margins standard-section"
      >
        <Heading>
          <h2>Images</h2>
        </Heading>
        <ProjectImagesGrid images={project.images.display} />
      </section>
    </div>
  );
}

export default ProjectPage;
