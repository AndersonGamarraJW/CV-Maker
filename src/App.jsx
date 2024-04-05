import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import { getKeyByIndex } from "./utils";
import NavBar from "./components/NavBar";
import ContactComponent from "./components/ContactComponent";
import SectionFieldContainer from "./components/SectionFieldContainer";
import EducationComponent from "./components/EducationComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import SkillsComponent from "./components/SkillsComponent";
function App() {
  const navItems = [
    { id: uuid(), index: "1", text: "Contact" },
    { id: uuid(), index: "2", text: "Education" },
    { id: uuid(), index: "3", text: "Experience" },
    { id: uuid(), index: "4", text: "Skills" },
  ];
  const displays = {
    contact: { index: "1", component: <ContactComponent /> },
    education: { index: "2", component: <EducationComponent /> },
    experience: { index: "3", component: <ExperienceComponent /> },
    skills: { index: "4", component: <SkillsComponent /> },
  };

  const [currentDisplayShow, setDispleyShow] = useState(displays.contact);

  return (
    <>
      <header>
        <NavBar
          navItems={navItems}
          currentIndexBtn={currentDisplayShow.index}
          setDisplayShow={(index) =>
            setDispleyShow(displays[getKeyByIndex(displays, index)])
          }
        ></NavBar>
      </header>
      <main>
        <SectionFieldContainer>
          {currentDisplayShow.component}
        </SectionFieldContainer>
      </main>
    </>
  );
}

export default App;
