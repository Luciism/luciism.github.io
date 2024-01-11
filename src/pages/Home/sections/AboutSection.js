import { forwardRef, useContext } from "react";

import InfoText from "components/Info/InfoText";
import SkillSet from "components/Info/SkillSet";
import { DataContext } from "DataContext";
import "./AboutSection.css";

const AboutSection = forwardRef((_, ref) => {
  const appData = useContext(DataContext);

  return (
    <section home-section="about" ref={ref} section-id="#about">
      <div className="about-container about">
        <h2 data-aos="fade-up">About</h2>

        <div className="about-sections-container">
          {appData &&
            appData.about.map((aboutData, i) => (
              <div data-aos="fade-up" key={i}>
                <InfoText
                  title={aboutData.title}
                  textContent={aboutData.content}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="about-container skills">
        <h2 data-aos="fade-up">Skills</h2>

        <div className="about-sections-container">
          {appData &&
            appData.skills.map((skillsData, i) => (
              <div data-aos="fade-up" key={i}>
                <SkillSet title={skillsData.title} skills={skillsData.values} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
});

export default AboutSection;