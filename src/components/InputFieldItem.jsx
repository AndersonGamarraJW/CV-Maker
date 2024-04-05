const InputFieldItem = ({ labelText, typeInput, idName }) => {
  return (
    <div className="input-field-item">
      <label htmlFor={idName}>{labelText}</label>
      <input type={typeInput} id={idName} />
    </div>
  );
};
export default InputFieldItem;
