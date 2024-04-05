import Square from "./Square";
const NavItem = ({ number, text, isActive }) => {
  const styleActive = isActive ? "active" : "";
  return (
    <li className={`nav-item ${styleActive}`}>
      <Square text={number} isActive={true}></Square>
      <p>{text}</p>
    </li>
  );
};
export default NavItem;
