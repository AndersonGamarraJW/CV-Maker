import NavItem from "./NavItem";
const NavBar = ({ navItems }) => {
  return (
    <ul className="nav-bar">
      {navItems.map((navItem) => {
        return (
          <NavItem
            key={navItem.id}
            number={navItem.number}
            text={navItem.text}
            isActive={false}
          ></NavItem>
        );
      })}
    </ul>
  );
};
export default NavBar;
