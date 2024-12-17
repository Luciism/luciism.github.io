import { useContext } from "react";

import { AppDataContext } from "DataContext";
import Heading from "components/Heading/Heading";
import "./Skills.css";


const SkillSet = ({appData, skillset}) => {
  const tools = skillset.toolIDs.map(
    (toolID) => appData.availableTools.find((t) => t.id === toolID)
  );
  console.log(tools);


  return (
    <div className="skillset">
      <h3 className="subheading">{skillset.name}</h3>
      <div className="skills-container">
        {tools.map((tool, i) => (
          <div className="skill-chip" key={i}>
            <img src={tool.icon} alt={tool.name} />
            <p className="body-medium color-text-secondary">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const SkillsSection = () => {
  const appData = useContext(AppDataContext);

  return (
    <section id="skills" className="skills-section standard-section page-margins">
      <Heading>
        <h2>Skills</h2>
      </Heading>

      {appData.skillsets.map((skillset, i) => (
        <SkillSet key={i} appData={appData} skillset={skillset} />
      ))}
    </section>
  );
}

export default SkillsSection;
