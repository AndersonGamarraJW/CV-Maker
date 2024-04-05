import InformationFieldContainer from "./InformationFieldContainer";
import InputFieldItem from "./InputFieldItem";
import "../styles/experience-display.css";
const ExperienceField = () => {
  return (
    <div className="experience-field-container">
      <div className="enterprise-info-container">
        <InputFieldItem labelText={"Enterprise"} typeInput={"text"} />
        <InputFieldItem labelText={"Job"} typeInput={"text"} />
        <InputFieldItem labelText={"Year"} typeInput={"date"} />
      </div>
      <InputFieldItem labelText={"Responsibilities"} typeInput={"text"} />
    </div>
  );
};
const ExperienceComponent = () => {
  const displayInfo = {
    title: "Experience Information",
    description: "This information will be on placed on the bottom",
  };
  return (
    <div>
      <InformationFieldContainer
        title={displayInfo.title}
        text={displayInfo.description}
      />
      <div className="fields-container">
        <ExperienceField></ExperienceField>
        <ExperienceField></ExperienceField>
      </div>
    </div>
  );
};
export default ExperienceComponent;
