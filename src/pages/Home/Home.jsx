import HomePageBackgroundBlur from "assets/homepage_background_blur.png"
import IntroSection from "./sections/Intro";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="background-blur-wrapper">
        <img
          src={HomePageBackgroundBlur}
          alt="Background Blur"
          className="background-blur"
        />
      </div>
      <div className="homepage-wrapper">
        <IntroSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </>
  );
};

export default Home;
