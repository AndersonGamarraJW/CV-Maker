const InputFieldItem = ({
  labelText,
  typeInput,
  idName,
  updateInfo,
  value,
}) => {
  return (
    <div className="input-field-item">
      <label htmlFor={idName}>{labelText}</label>
      <input
        type={typeInput}
        id={idName}
        onChange={(e) => updateInfo(e.target.value)}
        value={value}
      />
    </div>
  );
};
export default InputFieldItem;
