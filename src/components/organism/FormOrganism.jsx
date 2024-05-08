// 3rd party packages
import Form from "react-bootstrap/Form";

// components
import { submitButton } from "../atom/elements";
import FormGroupMolecule from "../molecule/FormGroupMolecule";
import useAppContext from "../../hooks/useAppContext";
import { axiosRes } from "../../utils/axiosDefaults";

const FormOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { url, forms } = formsReducers;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: data ready for API

    try {
      const { data } = await axiosRes.post(url, forms);

      console.log("data", data);
    } catch (e) {
      dispatch({ type: "FORM VALIDATION ERRORS", payload: e.response.data });
    }
  };

  console.log("formsReducers", formsReducers);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroupMolecule />

      {submitButton("primary")}
    </Form>
  );
};

export default FormOrganism;
