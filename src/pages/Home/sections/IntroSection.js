import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import "./IntroSection.css";

const IntroSection = () => {
  return (
    <section home-section="intro" section-id="">
      <div className="scroll-down-btn">
        <Link to="/#about">
          <Icon icon="formkit:down" />
        </Link>
      </div>

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

        <Link to="/#projects" style={{ textDecoration: "none" }}>
          <div className="projects-link" data-aos="fade-up">
            <p>
              Projects <Icon className="icon" icon="quill:arrow-right" />
            </p>
            <div className="projects-link-underline"></div>
          </div>
        </Link>
      </div>
      <div className="commissions-goto-wrapper">
        <div className="commissions-goto-content">
          <h2>
            COMMISSIONS
            <br />
            ARE OPEN!
          </h2>
          <Link to="/commissions" className="goto-btn padded-button">
            CHECK IT OUT!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
