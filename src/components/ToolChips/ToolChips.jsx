import "./ToolChips.css";

const ToolChips = ({ tools }) => {
  return (
    <div className="tools-container">
      {tools.map((tool, i) => (
        <div className="tool-chip" key={i}>
          <img src={tool.icon} alt={tool.name} />
          <p className="body-medium color-text-secondary">{tool.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ToolChips;
