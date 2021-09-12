import React from "react";

const TextArea = (props) => {
  const { value, required, rows, name, id, label, changeHandler } = props;
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows || 4}
        required={required}
        className="textArea form-control"
        onChange={(event) => changeHandler(event)}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
