import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import NavBar from "./components/NavBar";
function App() {
  const navItems = [
    { id: uuid(), number: "1", text: "Contact" },
    { id: uuid(), number: "2", text: "Education" },
    { id: uuid(), number: "3", text: "Experience" },
    { id: uuid(), number: "4", text: "Skills" },
  ];
  return <NavBar navItems={navItems}></NavBar>;
}

export default App;
