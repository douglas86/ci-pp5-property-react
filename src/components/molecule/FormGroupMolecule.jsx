// 3rd party libraries
import Form from "react-bootstrap/Form";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

const FormGroupMolecule = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { formData } = formsReducers;

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    const payload = {
      [name]: value,
    };

    dispatch({ type: "UPDATE FORM STATE", payload });
  };

  return (
    <>
      {formData.map(({ label, type, placeholder }, index) => (
        <Form.Group
          key={index}
          className="mb-3"
          controlId={`formBasic${label}`}
        >
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type={type}
            placeholder={placeholder}
            name={label}
            onChange={handleChange}
          />
        </Form.Group>
      ))}
    </>
  );
};

export default FormGroupMolecule;
