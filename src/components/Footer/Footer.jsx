import { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { AppDataContext } from "DataContext";
import "./Footer.css"


const Footer = () => {
  const appData = useContext(AppDataContext);
  const socials = appData.socials;

  return (
    <footer id="footer">
      <div className="footer-content page-margins">
        <Link to="/" className="branding-link">
          <img src="/branding/logo_full.png" alt="Home" />
        </Link>
        <div className="links">
          <div className="socials">
            <Link to={socials.github} target="_blank" rel="noreferrer noopener">
              <Icon icon="mdi:github" width="30" height="30" className="icon" />
            </Link>
            <Link
              to={socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon
                icon="mdi:linkedin"
                width="30"
                height="30"
                className="icon"
              />
            </Link>
            <Link
              to={socials.codepen}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon
                icon="mdi:codepen"
                width="30"
                height="30"
                className="icon"
              />
            </Link>
            <Link
              to={socials.wakatime}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon
                icon="simple-icons:wakatime"
                width="26"
                height="26"
                className="icon"
              />
            </Link>
          </div>
          <Link className="body-base color-text" to={`mailto:${appData.emailAddress}`}>
            {appData.emailAddress}
          </Link>
        </div>
        <p className="body-base color-text">&copy; 2024 Lucism, Made with love.</p>
      </div>
    </footer>
  );
}

export default Footer;
