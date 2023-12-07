import './Info.css'

const SkillSet = ({ title, skills }) => {
  return (
    <div className="info-container">
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
