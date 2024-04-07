import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import { getKeyByIndex, nextDisplay, prevDisplay } from "./utils";
import NavBar from "./components/NavBar";
import ContactComponent from "./components/ContactComponent";
import SectionFieldContainer from "./components/SectionFieldContainer";
import EducationComponent from "./components/EducationComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import SkillsComponent from "./components/SkillsComponent";
import Button from "./components/Button";
import PersonInfo from "./personInfo";
import emptyPerson from "./emptyPersonInfo.json";
import Preview from "./components/Preview";
function App() {
  const [infoPerson, setInfoPerson] = useState(new PersonInfo(emptyPerson));
  const navItems = [
    { id: uuid(), index: "1", text: "Contact" },
    { id: uuid(), index: "2", text: "Education" },
    { id: uuid(), index: "3", text: "Experience" },
    { id: uuid(), index: "4", text: "Skills" },
  ];

  const displays = {
    contact: {
      index: "1",
      component: (
        <ContactComponent person={infoPerson} updatePerson={setInfoPerson} />
      ),
    },
    education: { index: "2", component: <EducationComponent /> },
    experience: { index: "3", component: <ExperienceComponent /> },
    skills: { index: "4", component: <SkillsComponent /> },
  };
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
        <div>
          <SectionFieldContainer>
            {currentDisplayShow.component}
          </SectionFieldContainer>
          <div className="btns-container">
            <Button
              setDisplay={() =>
                setDispleyShow(prevDisplay(displays, currentDisplayShow))
              }
            >
              Back
            </Button>
            <Button
              setDisplay={() =>
                setDispleyShow(nextDisplay(displays, currentDisplayShow))
              }
            >
              Next
            </Button>
          </div>
        </div>
        <div>
          <Preview personInfo={infoPerson}></Preview>
        </div>
      </main>
    </>
  );
}

export default App;
