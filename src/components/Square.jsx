import "../styles/nav-bar.css";
const Square = ({ text, isActive }) => {
  const styleActive = isActive ? "active" : "";
  return (
    <div className={`square ${styleActive}`}>
      <p>{text}</p>
    </div>
  );
};
export default Square;
