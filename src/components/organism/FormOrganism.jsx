// 3rd party packages
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

// components
import FormGroupMolecule from "../molecule/FormGroupMolecule";
import { submitButton } from "../atom/elements";

// utilities
import { axiosRes } from "../../API/axiosDefaults";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

const FormOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { url, forms, redirectURL } = formsReducers;

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axiosRes.post(url, forms);
      navigate(redirectURL);
      console.log("data", data);
    } catch (e) {
      dispatch({ type: "FORM VALIDATION ERRORS", payload: e.response.data });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroupMolecule />

      {submitButton("primary")}
    </Form>
  );
};

export default FormOrganism;
