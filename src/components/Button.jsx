const Button = ({ children, setDisplay }) => {
  return <button onClick={setDisplay}>{children}</button>;
};
export default Button;
