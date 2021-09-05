import React from "react";

const Input = ({
  type,
  label,
  required,
  disabled,
  name,
  changeHandler,
  value,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        className="input form-control"
        onChange={(event) => changeHandler(event)}
        value={value}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
