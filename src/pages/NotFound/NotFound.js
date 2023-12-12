import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="page-not-found-page">
      <div className="page-not-found-container">
        <h1 data-aos="fade-up">404</h1>
        <hr data-aos="fade-up" data-aos-delay="100" data-aos-duration="400" />
        <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
          Page Not Found
        </h2>
      </div>
      <div data-aos="fade-in" data-aos-delay="400">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="padded-button background-gradient-linear home-btn">
            <Icon icon="ph:arrow-left-bold" />
            <span>Back Home</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
