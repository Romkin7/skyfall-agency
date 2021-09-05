import React, { Fragment } from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";

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
            services={services.values}
          />
        );
      case "textarea":
        return <TextArea name={input.htmlfor} label={input.inputlabel} />;
      default:
        return <p>error</p>;
    }
  };
  console.log(formData);
  return (
    <form>
      {formData.Inputcomponent.map((input) => {
        return (
          <Fragment key={input.id}>{setInput(input.inputtype, input)}</Fragment>
        );
      })}
      <Button type={formData.Button[0].type}>{formData.Button[0].text}</Button>
    </form>
  );
};

export default Form;
