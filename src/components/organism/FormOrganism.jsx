import Form from "react-bootstrap/Form";
import { submitButton } from "../atom/elements";

const FormOrganism = (props) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {submitButton("primary")}
    </Form>
  );
};

export default FormOrganism;
