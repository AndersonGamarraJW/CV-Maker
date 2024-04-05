import "../styles/contact-display.css";
import InformationFieldContainer from "./InformationFieldContainer";
import InputFieldItem from "./InputFieldItem";
const ContactComponent = () => {
  const contactInfo = {
    title: "Contact Information",
    description: "This information will be on placed on the top of your cv",
  };
  return (
    <div className="section-fields-container">
      <InformationFieldContainer
        title={contactInfo.title}
        text={contactInfo.description}
      />
      <div className="fields-container">
        <div className="fullname-container">
          <InputFieldItem
            labelText={"First Name"}
            typeInput={"text"}
            idName={"first-name"}
          />
          <InputFieldItem
            labelText={"Last Name"}
            typeInput={"text"}
            idName={"last-name"}
          />
        </div>
        <InputFieldItem
          labelText={"Email"}
          typeInput={"email"}
          idName={"email"}
        />
        <InputFieldItem
          labelText={"Phone"}
          typeInput={"tel"}
          idName={"phone"}
        />
        <InputFieldItem
          labelText={"Address"}
          typeInput={"text"}
          idName={"address"}
        />
      </div>
    </div>
  );
};
export default ContactComponent;
