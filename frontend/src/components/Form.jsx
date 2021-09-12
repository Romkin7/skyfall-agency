import React, { Fragment, useState } from "react";
import { resetFormState } from "../utils/resetUtil";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import ResponseMessage from "./ResponseMessage";

const Form = ({ formData, services }) => {
  const [formState, setFormState] = useState(() => resetFormState());
  const [successMessage, setSuccessMessage] = useState(() => false);
  console.log(formState);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(process.env.API_URL + "/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    setFormState(() => resetFormState());
    setSuccessMessage(() => true);
  };
  const changeHandler = (event) => {
    setFormState(() => {
      return { ...formState, [event.target.name]: event.target.value };
    });
  };
  const handleClick = () => {
    setSuccessMessage(false);
  };
  const setInput = (inputtype, input) => {
    switch (inputtype) {
      case "text":
        return (
          <Input
            type={inputtype}
            name={input.htmlfor}
            label={input.inputlabel}
            changeHandler={changeHandler}
            required={input.required}
          />
        );
      case "email":
        return (
          <Input
            type={inputtype}
            name={input.htmlfor}
            label={input.inputlabel}
            changeHandler={changeHandler}
            required={input.required}
          />
        );
      case "select":
        return (
          <Select
            name={input.htmlfor}
            label={input.inputlabel}
            services={services.values}
            changeHandler={changeHandler}
            required={input.required}
          />
        );
      case "textarea":
        return (
          <TextArea
            name={input.htmlfor}
            label={input.inputlabel}
            changeHandler={changeHandler}
            required={input.required}
          />
        );
      default:
        return <p>error</p>;
    }
  };
  return (
    <>
      {successMessage ? (
        <ResponseMessage
          message="Kiitos yhteydenotostanne, vastaamme teille mahdollisimman pian!"
          handleClick={handleClick}
        />
      ) : (
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
          <p>* Tähdellä merkityt kentät ovat pakollisia.</p>
          {formData.Inputcomponent.map((input) => {
            return (
              <Fragment key={input.id}>
                {setInput(input.inputtype, input)}
              </Fragment>
            );
          })}
          <Button type={formData.Button[0].type}>
            {formData.Button[0].text}
          </Button>
        </form>
      )}
    </>
  );
};

export default Form;
