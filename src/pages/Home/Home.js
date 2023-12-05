import "./Home.css";
import AbstractShapes from "./AbstractShapes";
import IntroSection from "./sections/IntroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import { useRef } from "react";



export default function Home() {
  const projectsSectionRef = useRef(null);

  return (
    <div className="home">
      <div className="abstract-shapes">
        <AbstractShapes />
      </div>
      <IntroSection projectsSectionRef={projectsSectionRef} />
      <AboutSection />
      <ProjectsSection ref={projectsSectionRef} />
    </div>
  );
}
