import React from "react";

const Select = ({
  label,
  htmlFor,
  options,
  required = true,
  handleChange,
  service,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      <select
        id="subject"
        required={required}
        name="subject"
        onChange={handleChange}
        className="form-select"
        aria-label="Default select example"
      >
        {service && <option value={service}>{service}</option>}
        {options.map((subjectInMap) => {
          return (
            <option key={subjectInMap} value={subjectInMap}>
              {subjectInMap}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
