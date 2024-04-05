import { useState } from "react";
import "../styles/nav-bar.css";
import NavItem from "./NavItem";
const NavBar = ({ navItems, currentIndexBtn, setDisplayShow }) => {
  return (
    <ul className="nav-bar">
      {navItems.map((navItem) => {
        return (
          <NavItem
            key={navItem.id}
            index={navItem.index}
            text={navItem.text}
            isActive={currentIndexBtn === navItem.index}
            onShow={() => setDisplayShow(navItem.index)}
          ></NavItem>
        );
      })}
    </ul>
  );
};
export default NavBar;
