import Form from "react-bootstrap/Form";
import useAppContext from "../../hooks/useAppContext";

const FormGroupMolecule = ({ props }) => {
  const { state } = useAppContext();
  const { formsReducers } = state;
  const { formData } = formsReducers;

  console.log("state", state);
  console.log("formsReducers", formsReducers);
  console.log("formData", formData);

  return (
    <>
      {formData.map(({ label, type, placeholder }, index) => (
        <Form.Group
          key={index}
          className="mb-3"
          controlId={`formBasic${label}`}
        >
          <Form.Label>{label}</Form.Label>
          <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
      ))}
    </>
  );
};

export default FormGroupMolecule;
