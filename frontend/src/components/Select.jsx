import React from "react";

const Select = ({
  label,
  htmlFor,
  services,
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
        {services.length &&
          services.map((serviceInMap) => {
            return (
              <option key={serviceInMap.id} value={serviceInMap.value}>
                {serviceInMap.text}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;
