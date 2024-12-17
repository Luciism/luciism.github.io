import BackgroundBlur1 from "components/BackgroundBlur/BackgroundBlur1";
import IntroSection from "./sections/Intro";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import "./Home.css"

const Home = () => {
  return (
    <>
      <BackgroundBlur1 />
      <div className="homepage-wrapper">
        <IntroSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </>
  );
};

export default Home;
