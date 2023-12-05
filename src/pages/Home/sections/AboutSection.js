import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div home-section="about">
      <div className="about-container about">
        <h2 data-aos="fade-up">About</h2>

        <div className="about-sections-container">
          <div className="about-section" data-aos="fade-up">
            <h3>Background</h3>

            <p>
              I grew up as a slave in china, it was hard for me to make an
              honest living for my and my family working hard in a sweat shop
              for $0.01 an hour.
              <br />
              <br />I have always been fascinated by the world of technology and
              was always wondering how things work, it seemed like magic. I
              started programming in my free time by carving symbols into rocks
              in the cave that I lived in.
            </p>
          </div>

          <div className="about-section" data-aos="fade-up">
            <h3>Lorem, ipsum.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              omnis asperiores aperiam fuga, voluptas ullam nobis dignissimos
              placeat corrupti nihil? Odio, neque.
              <br />
              <br />
              Nulla recusandae minima ratione ullam blanditiis eveniet quam
              error reiciendis molestias repudiandae! Voluptatibus similique sed
              deserunt soluta esse. Reprehenderit omnis consequatur beatae
              laborum, nesciunt iure accusamus cupiditate ratione.
            </p>
          </div>
        </div>
      </div>

      <div className="about-container skills">
        <h2 data-aos="fade-up">Skills</h2>

        <div className="about-sections-container">
          <div className="about-section" data-aos="fade-up">
            <h3>Languages</h3>

            <div className="skill-list">
              <li>Python</li>
              <li>Javascript</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
            </div>
          </div>

          <div className="about-section" data-aos="fade-up">
            <h3>Frameworks</h3>

            <div className="skill-list">
              <li>React</li>
              <li>Node</li>
              <li>Flask</li>
              <li>Quart</li>
            </div>
          </div>

          <div className="about-section" data-aos="fade-up">
            <h3>Tools</h3>

            <div className="skill-list">
              <li>Git & Github</li>
              <li>Bash</li>
              <li>PostgreSQL</li>
              <li>Sqlite3</li>
              <li>Devtools</li>
              <li>Figma</li>
              <li>VSCode</li>
              <li>IntelliJ IDEA</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
