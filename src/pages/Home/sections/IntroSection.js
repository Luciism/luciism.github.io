import { Icon } from "@iconify/react";
import './IntroSection.css'


const IntroSection = ({projectsSectionRef}) => {
  const handleProjectsBtnClick = () => {
    projectsSectionRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div home-section="intro">
      <div className="intro-text">
        <h1 className="intro-heading" data-aos="fade-left">
          Turning <span className="text-gradient">ideas</span>
          <br />
          into <span className="text-gradient">reality</span>
        </h1>
        <p className="intro-description" data-aos="fade-right">
          Hi, I'm <b>Luca</b>, a full-stack software<br />developer based in New
          Zealand.
        </p>

        <div
          className="projects-link"
          onClick={handleProjectsBtnClick}
          data-aos="fade-up"
        >
          <p>
            Projects <Icon className="icon" icon="quill:arrow-right" />
          </p>
          <div className="projects-link-underline"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
