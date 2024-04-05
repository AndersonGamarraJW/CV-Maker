import { useState } from "react";
import "../styles/nav-bar.css";
import NavItem from "./NavItem";
const NavBar = ({ navItems }) => {
  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <ul className="nav-bar">
      {navItems.map((navItem) => {
        return (
          <NavItem
            key={navItem.id}
            number={navItem.number}
            text={navItem.text}
            isActive={activeBtn === navItem.number}
            onShow={() => {
              setActiveBtn(navItem.number);
            }}
          ></NavItem>
        );
      })}
    </ul>
  );
};
export default NavBar;
