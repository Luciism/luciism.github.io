import "./AboutSection.css";
import InfoText from "components/Info/InfoText";
import SkillSet from "components/Info/SkillSet";

const AboutSection = () => {
  return (
    <div home-section="about">
      <div className="about-container about">
        <h2 data-aos="fade-up">About</h2>

        <div className="about-sections-container">
          <div data-aos="fade-up">
            <InfoText
              title="Background"
              textContent={
                "I grew up as a slave in china, it was hard for me tomake an honest " +
                "living for my and my family working hard in a sweat shop for $0.01 " +
                "an hour.\n\nI have always been fascinated by the world of technolog" +
                "y and was always wondering how things work, it seemed like magic. I" +
                " started programming in my free time by carving symbols into rocks " +
                "in the cave that I lived in."
              }
            />
          </div>

          <div data-aos="fade-up">
            <InfoText
              title="Lorem, ipsum."
              textContent={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omn" +
                "is asperiores aperiam fuga, voluptas ullam nobis dignissimos placea" +
                "t corrupti nihil? Odio, neque.\n\nNulla recusandae minima ratione u" +
                "llam blanditiis eveniet quam error reiciendis molestias repudiandae" +
                "! Voluptatibus similique sed deserunt soluta esse. Reprehenderit om" +
                "nis consequatur beatae laborum, nesciunt iure accusamus cupiditate " +
                "ratione."
              }
            />
          </div>
        </div>
      </div>

      <div className="about-container skills">
        <h2 data-aos="fade-up">Skills</h2>

        <div className="about-sections-container">
          <div data-aos="fade-up">
            <SkillSet
              title="Languages"
              skills={["Python", "Javascript", "Java", "HTML", "CSS", "SQL"]}
            />
          </div>

          <div data-aos="fade-up">
            <SkillSet
              title="Frameworks"
              skills={["React", "Node", "Flask", "Quart"]}
            />
          </div>

          <div data-aos="fade-up">
            <SkillSet
              title="Tools"
              skills={[
                "Git & Github",
                "Bash",
                "PostgreSQL",
                "Sqlite3",
                "Devtools",
                "Figma",
                "VSCode",
                "IntelliJ IDEA",
              ]}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
