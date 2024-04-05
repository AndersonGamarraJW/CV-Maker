import Square from "./Square";
import "../styles/nav-bar.css";
const NavItem = ({ index, text, isActive, onShow }) => {
  const styleActive = isActive ? "active" : "";
  return (
    <li className={`nav-item ${styleActive}`} onClick={onShow}>
      <Square text={index} isActive={isActive}></Square>
      <p>{text}</p>
    </li>
  );
};
export default NavItem;
