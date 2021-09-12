import React from "react";
import Button from "./Button";
import CheckIcon from "./Icons/CheckIcon";

const ResponseMessage = ({ message, handleClick }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-12">
        <span className="checkIcon">
          <CheckIcon />
        </span>
        <h3>Thank you for contacting us!</h3>
      </div>
      <p>{message}</p>
      <Button
        buttonText="Close"
        type="button"
        size="lg"
        clickHandler={handleClick}
      />
    </div>
  );
};

export default ResponseMessage;
