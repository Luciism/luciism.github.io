import "./Home.css";
import AbstractShapes from "./AbstractShapes";
import IntroSection from "./sections/IntroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "ScrollToTop";


export default function Home() {
  const projectsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/about") {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className="home">
      {location.pathname === "/" && (
        <ScrollToTop scrollOptions={{ behavior: "smooth" }} />
      )}

      <div className="abstract-shapes">
        <AbstractShapes />
      </div>

      <IntroSection />
      <AboutSection ref={aboutSectionRef} />
      <ProjectsSection ref={projectsSectionRef} />
    </div>
  );
}
