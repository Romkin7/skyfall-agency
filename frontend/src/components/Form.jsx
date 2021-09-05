import React, { Fragment } from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

const Form = ({ formData, services }) => {
  const setInput = (inputtype, input) => {
    switch (inputtype) {
      case "text":
        return <Input type={inputtype} label={input.inputlabel} />;
      case "email":
        return <Input type={inputtype} label={input.inputlabel} />;
      case "select":
        return (
          <Select
            name={input.htmlfor}
            label={input.inputlabel}
            options={services}
          />
        );
      case "textarea":
        return <TextArea name={input.htmlfor} label={input.inputlabel} />;
      default:
        return <p>error</p>;
    }
  };
  return (
    <form>
      {formData.Inputcomponent.map((input) => {
        return (
          <Fragment key={input.id}>{setInput(input.inputtype, input)}</Fragment>
        );
      })}
    </form>
  );
};

export default Form;
