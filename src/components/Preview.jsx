const InfoPreview = ({ name, lastName }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{lastName}</p>
    </div>
  );
};
const ContactFieldPreview = () => {};
const ContactPreview = ({ number, email, address }) => {};
const SectionPreview = ({ title, children }) => {};
const ExperienceFieldPreview = ({
  companyName,
  jobPosition,
  responsibilities,
}) => {};
const EducationFieldPreview = ({ year, schoolName, description }) => {};
const SkillFieldPreview = ({ skill }) => {};
const Preview = ({ personInfo }) => {
  return (
    <div>
      <InfoPreview
        name={personInfo.name}
        lastName={personInfo.lastName}
      ></InfoPreview>
    </div>
  );
};
export default Preview;
