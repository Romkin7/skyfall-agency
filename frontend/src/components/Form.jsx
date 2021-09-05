import React, { Fragment } from "react";
import Input from "./Input";

const Form = ({ formData }) => {
  const setInput = (inputtype) => {
    switch (inputtype) {
      case "text":
        return <Input type={inputtype} />;
      default:
        return <p>error</p>;
    }
  };
  return (
    <form>
      {formData.Inputcomponent.map((input) => {
        return <Fragment key={input.id}>{setInput(input.inputtype)}</Fragment>;
      })}
    </form>
  );
};

export default Form;
