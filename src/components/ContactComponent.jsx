import "../styles/contact-display.css";
import InformationFieldContainer from "./InformationFieldContainer";
import InputFieldItem from "./InputFieldItem";
const ContactComponent = ({ person, updatePerson }) => {
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
            updateInfo={(value) => updatePerson(person.setName(value))}
            value={person.name}
          />
          <InputFieldItem
            labelText={"Last Name"}
            typeInput={"text"}
            idName={"last-name"}
            updateInfo={(value) => updatePerson(person.setLastName(value))}
            value={person.lastName}
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
