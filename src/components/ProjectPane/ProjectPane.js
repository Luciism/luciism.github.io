import './ProjectPane.css'
import { Link } from 'react-router-dom'

const ProjectPane = ({projectData}) => {
  return (
    <Link
      to={projectData.url}
      style={{textDecoration: 'none'}}
    >
      <div className="project-pane">
        <div className="project-thumbnail-wrapper">
          <img src={projectData.thumbnail_url} alt="thumbnail" loading='lazy' />
        </div>

        <div className="project-details">
          <div>
            <h3 className="project-title">{projectData.title}</h3>
            <p className="project-description">{projectData.description}</p>
          </div>

          <div className="project-tags">
            {projectData.tags.map((tag) => (
              <p className="project-tag" key={Math.random()}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectPane;