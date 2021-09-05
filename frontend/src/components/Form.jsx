import React, { Fragment } from "react";

const Form = ({ formData }) => {
  return (
    <form>
      {formData.Inputcomponent.map((input) => {
        return <Fragment key={input.id}></Fragment>;
      })}
    </form>
  );
};

export default Form;
