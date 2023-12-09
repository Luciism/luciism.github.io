import { Icon } from "@iconify/react";
import InfoText from "components/Info/InfoText";
import SkillSet from "components/Info/SkillSet";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './ProjectPage.css'

const ProjectPage = ({ projectData }) => {
  const navigate = useNavigate(null);

  const handleBackBtnClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }
  
  return (
    <div className="project-page">
      <div className="project-intro">
        <div className="project-intro-text-container">
          <h1 className="project-title-txt" data-aos="fade-up">
            {projectData.title}
          </h1>
          <p
            className="project-description-txt"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {projectData.description.short}
          </p>
        </div>
        <div
          className="project-btns"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href={projectData.links.website}
            target="_blank"
            rel="noreferrer"
            className="padded-button background-gradient-linear"
          >
            <Icon icon="tdesign:link" />
            <span>Website</span>
          </a>
          <a
            href={projectData.links.github}
            className="padded-button gradient-outline"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:github" />
            <span>Github</span>
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="project-images-wrapper">
          <div className="project-images">
            {projectData.images.map((image, i) => (
              <div className="project-img-wrapper" key={i}>
                <img src={image} alt={`project_image_${i}.png`} />
              </div>
            ))}
          </div>
        </div>

        <div className="project-information">
          <div data-aos="fade-up">
            <InfoText
              title="Overview"
              textContent={projectData.description.long}
            />
          </div>

          <div data-aos="fade-up">
            <SkillSet title="Tools Used" skills={projectData.tools} />
          </div>
        </div>
        <p
          onClick={handleBackBtnClick}
          className="padded-button background-gradient-linear back-btn"
        >
          <Icon icon="ph:arrow-left-bold" />
          <span>Back</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
