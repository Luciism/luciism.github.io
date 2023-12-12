import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import AbstractShapes from "./AbstractShapes";
import IntroSection from "./sections/IntroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ScrollToTop from "ScrollToTop";
import useHandleSectionHash from "hooks/useHandleSectionHash";
import "./Home.css";

export default function Home() {
  const projectsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#about") {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    window.addEventListener("scroll", useHandleSectionHash);

    return () => {
      window.removeEventListener("scroll", useHandleSectionHash);
    };
  });

  return (
    <div className="home">
      {/* document title for semantic purposes */}
      <h1 style={{ display: "none" }}>lucism.dev - Home</h1>

      {location.hash === "" && (
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
