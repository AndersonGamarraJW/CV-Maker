import "../styles/education-display.css";
import InformationFieldContainer from "./InformationFieldContainer";
import InputFieldItem from "./InputFieldItem";
const EducationField = () => {
  return (
    <div className="education-field-container">
      <InputFieldItem labelText={"School"} typeInput={"text"} />
      <InputFieldItem labelText={"Year"} typeInput={"number"} />
    </div>
  );
};
const EducationComponent = () => {
  const sectionInfo = {
    title: "Education Information",
    description: "This information will be on placed on the bottom",
  };
  return (
    <div>
      <InformationFieldContainer
        title={sectionInfo.title}
        text={sectionInfo.description}
      />
      <div className="fields-container">
        <EducationField />
        <EducationField />
      </div>
    </div>
  );
};
export default EducationComponent;
