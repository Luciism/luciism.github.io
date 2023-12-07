import "./Info.css";

const InfoText = ({ title, textContent }) => {
  return (
    <div className="info-container">
      <h3>{title}</h3>

      <p style={{ whiteSpace: "pre-line" }}>{textContent}</p>
    </div>
  );
};

export default InfoText;
