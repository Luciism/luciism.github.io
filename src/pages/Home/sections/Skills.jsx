import { useContext } from "react";

import { AppDataContext } from "DataContext";
import Heading from "components/Heading/Heading";
import ToolChips from "components/ToolChips/ToolChips";


const SkillSet = ({appData, skillset}) => {
  const tools = skillset.toolIDs.map(
    (toolID) => appData.availableTools.find((t) => t.id === toolID)
  );

  return (
    <div className="skillset headed-info">
      <h3 className="subheading">{skillset.name}</h3>
      <ToolChips tools={tools} />
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
