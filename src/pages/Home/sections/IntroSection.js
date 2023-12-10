import { Icon } from "@iconify/react";
import './IntroSection.css'
import { Link } from "react-router-dom";


const IntroSection = () => {
  return (
    <div home-section="intro">
      <Link to="/about" className="scroll-down-btn">
        <Icon icon="formkit:down" />
      </Link>

      <div className="intro-text">
        <h1 className="intro-heading" data-aos="fade-left">
          Turning <span className="text-gradient">ideas</span>
          <br />
          into <span className="text-gradient">reality</span>
        </h1>
        <p className="intro-description" data-aos="fade-right">
          Hi, I'm <b>Luca</b>, a full-stack software
          <br />
          developer based in New Zealand.
        </p>

        <Link to="/projects" style={{ textDecoration: "none" }}>
          <div className="projects-link" data-aos="fade-up">
            <p>
              Projects <Icon className="icon" icon="quill:arrow-right" />
            </p>
            <div className="projects-link-underline"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IntroSection;
