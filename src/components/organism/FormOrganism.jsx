// 3rd party packages
import Form from "react-bootstrap/Form";

// components
import { submitButton } from "../atom/elements";
import FormGroupMolecule from "../molecule/FormGroupMolecule";
import useAppContext from "../../hooks/useAppContext";
import { getNodeText } from "@testing-library/react";

const FormOrganism = () => {
  const { state } = useAppContext();
  const { formsReducers } = state;
  const { forms } = formsReducers;

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: data ready for API

    console.log("forms", forms);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroupMolecule />

      {submitButton("primary")}
    </Form>
  );
};

export default FormOrganism;
