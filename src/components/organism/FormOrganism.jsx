// 3rd party packages
import Form from "react-bootstrap/Form";

// components
import { submitButton } from "../atom/elements";
import FormGroupMolecule from "../molecule/FormGroupMolecule";

const FormOrganism = () => {
  return (
    <Form>
      <FormGroupMolecule />

      {submitButton("primary")}
    </Form>
  );
};

export default FormOrganism;
