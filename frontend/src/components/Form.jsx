import React, { Fragment } from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";

const Form = ({ formData, services }) => {
  const setInput = (inputtype, input) => {
    switch (inputtype) {
      case "text":
        return (
          <Input
            type={inputtype}
            name={input.htmlfor}
            label={input.inputlabel}
            required={input.required}
          />
        );
      case "email":
        return (
          <Input
            type={inputtype}
            name={input.htmlfor}
            label={input.inputlabel}
            required={input.required}
          />
        );
      case "select":
        return (
          <Select
            name={input.htmlfor}
            label={input.inputlabel}
            services={services.values}
            required={input.required}
          />
        );
      case "textarea":
        return (
          <TextArea
            name={input.htmlfor}
            label={input.inputlabel}
            required={input.required}
          />
        );
      default:
        return <p>error</p>;
    }
  };
  console.log(formData);
  return (
    <form className="form">
      <p>* Tähdellä merkityt kentät ovat pakollisia.</p>
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
