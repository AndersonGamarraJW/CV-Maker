const InformationFieldContainer = ({ title, text }) => {
  return (
    <div className="information-field-container">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
export default InformationFieldContainer;
