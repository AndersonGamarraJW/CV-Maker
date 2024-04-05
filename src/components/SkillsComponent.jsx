import InformationFieldContainer from "./InformationFieldContainer";
import InputFieldItem from "./InputFieldItem";
import "../styles/skills-display.css";
const SkillsComponent = () => {
  const displayInfo = {
    title: "Skills",
    description: "This is a important information",
  };
  return (
    <div className="skills-display-container">
      <InformationFieldContainer
        title={displayInfo.title}
        text={displayInfo.description}
      ></InformationFieldContainer>
      <div className="fields-container">
        <div>
          <p>{"Hard Skills"}</p>
          <InputFieldItem labelText={"Skill Name"} typeInput={"text"} />
        </div>
        <div>
          <p>{"Soft Skills"}</p>
          <InputFieldItem labelText={"Skill Name"} typeInput={"text"} />
        </div>
      </div>
    </div>
  );
};
export default SkillsComponent;
