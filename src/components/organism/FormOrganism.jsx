// 3rd party libraries
import Form from "react-bootstrap/Form";
import { useState } from "react";

// components
import { buttonClick } from "../atom/elements";

// styling
import styles from "../../styles/organism/Form.module.css";

const FormOrganism = ({ data }) => {
  const [state, setState] = useState({
    file: null,
    base64URL: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("e", e);
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";

      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleImage = (e) => {
    let { file } = state;
    file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setState({
          ...state,
          base64Url: result,
          file,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });

    setState({
      ...state,
      file: e.target.files[0],
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
            onChange={item.type === "file" ? handleImage : handleChange}
          />
        </Form.Group>
      ))}
      {buttonClick((e) => handleSubmit(e), "Save", "primary")}
    </Form>
  );
};

export default FormOrganism;
