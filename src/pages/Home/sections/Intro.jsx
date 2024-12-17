import { useContext } from "react";

import { AppDataContext } from "DataContext";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Intro.css";

const IntroSection = () => {
  const appData = useContext(AppDataContext);

  const emailAddress = appData.emailAddress;
  const socials = appData.socials;

  return (
    <section id="about" className="intro-section page-margins">
      <img src="/mugshot.png" alt="Mugshot" className="mugshot" data-aos="fade-up" />
      <div className="intro" data-aos="fade-left">
        <div className="info-text">
          <p className="location">
            <Icon
              icon="akar-icons:location"
              width="18"
              height="18"
              className="icon"
            />
            <span className="body-strong">New Zealand</span>
          </p>
          <div className="me">
            <h1>Hi, I'm Luka</h1>
            <p className="subheading">A Full Stack Developer</p>
          </div>
        </div>
        <div className="links">
          <div className="socials">
            <Link to={socials.github} target="_blank" rel="noreferrer noopener">
              <Icon
                icon="mdi:github"
                width="26"
                height="26"
                className="icon"
              />
            </Link>
            <Link to={socials.linkedin} target="_blank" rel="noreferrer noopener">
              <Icon
                icon="mdi:linkedin"
                width="26"
                height="26"
                className="icon"
              />
            </Link>
            <Link to={socials.codepen} target="_blank" rel="noreferrer noopener">
              <Icon
                icon="mdi:codepen"
                width="26"
                height="26"
                className="icon"
              />
            </Link>
            <Link to={socials.wakatime} target="_blank" rel="noreferrer noopener">
              <Icon
                icon="simple-icons:wakatime"
                width="22"
                height="22"
                className="icon"
              />
            </Link>
          </div>
          <Link to={`mailto:${emailAddress}`} className="contact padded-btn pilled gradient">
            <Icon icon="ic:baseline-email" />
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
