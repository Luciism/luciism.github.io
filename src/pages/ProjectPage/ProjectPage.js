import { Icon } from "@iconify/react";
import InfoText from "components/Info/InfoText";
import SkillSet from "components/Info/SkillSet";
import { Link } from "react-router-dom";
import './ProjectPage.css'
import ScrollToTop from "ScrollToTop";
import { useContext } from 'react';
import { DataContext } from 'DataContext';
import { useLocation } from "react-router-dom";


const ProjectPage = () => {
  const location = useLocation();
  const appData = useContext(DataContext);

  const projectData = appData.projects[location.pathname];

  return (
    <div className="project-page">
      <ScrollToTop />
      <div className="project-intro">
        <div className="project-intro-text-container">
          <h1 className="project-title-txt" data-aos="fade-up">
            {projectData.page.title}
          </h1>
          <p
            className="project-description-txt"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {projectData.page.description.short}
          </p>
        </div>
        <div className="project-btns" data-aos="fade-up" data-aos-delay="200">
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
            {projectData.page.images.map((image, i) => (
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
              textContent={projectData.page.description.long}
            />
          </div>

          <div data-aos="fade-right">
            <SkillSet title="Tools Used" skills={projectData.page.tools} />
          </div>
        </div>

        <div data-aos="flip-up" data-aos-offset="30">
          <Link to="/#projects" style={{textDecoration: "none"}}>
            <p
              className="padded-button background-gradient-linear back-btn"
            >
              <Icon icon="ph:arrow-left-bold" />
              <span>Back</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
