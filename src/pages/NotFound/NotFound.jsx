import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <section className="not-found-section page-margins">
        <div className="info" data-aos="fade-down">
          <p className="headline-medium color-primary">404</p>
          <h1>Page Not Found</h1>
          <p className="body-base color-text-secondary">
            I was unable to find the page you are looking for.
          </p>
        </div>
        <Link className="padded-btn" to="/" data-aos="fade-up" data-aos-delay={100}>
          <Icon icon="ic:round-home" width={16} />
          <span>Return Home</span>
        </Link>
      </section>
    </div>
  );
}

export default NotFound;