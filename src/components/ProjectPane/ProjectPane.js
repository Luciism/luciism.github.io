import { Link } from "react-router-dom";

import "./ProjectPane.css";

const ProjectPane = ({ projectRoute, projectData }) => {
  return (
    <Link to={projectRoute} style={{ textDecoration: "none" }}>
      <div className="project-pane">
        <div className="project-thumbnail-wrapper">
          <img
            src={projectData.preview.thumbnail_url}
            alt="thumbnail"
            loading="lazy"
          />
        </div>

        <div className="project-details">
          <div>
            <h3 className="project-title">{projectData.preview.title}</h3>
            <p className="project-description">
              {projectData.preview.description}
            </p>
          </div>

          <div className="project-tags">
            {projectData.preview.tags.map((tag) => (
              <p className="project-tag" key={Math.random()}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPane;
