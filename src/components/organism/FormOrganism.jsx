import Form from "react-bootstrap/Form";
import { useState } from "react";

import styles from "../../styles/organism/Form.module.css";

const FormOrganism = ({ data }) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  console.log("state", state);

  return (
    <Form className={styles.container}>
      {data.map((item, index) => (
        <Form.Group
          className="mb-3"
          key={index}
          controlId={`exampleForm.ControlInput${index}`}
        >
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            onChange={handleChange}
          />
        </Form.Group>
      ))}
    </Form>
  );
};

export default FormOrganism;
