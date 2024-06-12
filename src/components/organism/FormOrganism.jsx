import Form from "react-bootstrap/Form";
import { useState } from "react";

import styles from "../../styles/organism/Form.module.css";
import { buttonClick } from "../atom/elements";
import AxiosDefaults from "../../API/axiosDefaults";

/**
 * Organism to display forms
 * @param form - parameter to pass in what form you want to use
 * @returns {JSX.Element}
 * @constructor
 */
const FormOrganism = ({ form }) => {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});

  const { SubmitURL, buttonText, populateForm } = form;

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await AxiosDefaults.post(SubmitURL, state)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleCancel = () => {
    console.log("cancel was clicked");
  };

  console.log("state", state);

  return (
    <Form className={styles.container}>
      {populateForm.map(({ index, label, type, placeholder, name }) => (
        <Form.Group className="mb-3" controlId={`${name}${index}`} key={index}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
          />
        </Form.Group>
      ))}
      <div className={styles.buttons}>
        {buttonClick((e) => handleSubmit(e), buttonText, "success")}
        {buttonClick(() => handleCancel(), "Cancel", "primary")}
      </div>
    </Form>
  );
};

export default FormOrganism;

// // 3rd party libraries
// import Form from "react-bootstrap/Form";
// import { useState } from "react";
//
// // components
// import { buttonClick } from "../atom/elements";
//
// // styling
// import styles from "../../styles/organism/Form.module.css";
// import axiosDefaults, { axiosRes } from "../../API/axiosDefaults";
//
// const FormOrganism = ({ data }) => {
//   const [state, setState] = useState({
//     file: null,
//     base64URL: "",
//   });
//   const [d, setD] = useState(null);
//
//   const handleChange = (e) => {
//     e.preventDefault();
//
//     const { name, value } = e.target;
//
//     setState({
//       ...state,
//       [name]: value,
//     });
//   };
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//
//     try {
//       const { data } = await axiosDefaults.post("/stocks/create", state);
//       console.log("data", data);
//       setD((prevD) => ({
//         ...prevD,
//         results: prevD.results.map((item) => {
//           console.log("item", item);
//         }),
//       }));
//     } catch (err) {
//       console.log("error", err);
//     }
//   };
//
//   const getBase64 = (file) => {
//     return new Promise((resolve) => {
//       let baseURL = "";
//
//       let reader = new FileReader();
//
//       reader.readAsDataURL(file);
//
//       reader.onload = () => {
//         baseURL = reader.result;
//         resolve(baseURL);
//       };
//     });
//   };
//
//   const handleImage = (e) => {
//     let { file } = state;
//     file = e.target.files[0];
//
//     getBase64(file)
//       .then((result) => {
//         file["base64"] = result;
//         setState({
//           ...state,
//           base64Url: result,
//           file,
//         });
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//
//     setState({
//       ...state,
//       file: e.target.files[0],
//     });
//   };
//
//   return (
//     <Form className={styles.container}>
//       {data.map((item, index) => (
//         <Form.Group
//           className="mb-3"
//           key={index}
//           controlId={`exampleForm.ControlInput${index}`}
//         >
//           <Form.Label>{item.label}</Form.Label>
//           <Form.Control
//             type={item.type}
//             placeholder={item.placeholder}
//             name={item.name}
//             onChange={item.type === "file" ? handleImage : handleChange}
//           />
//         </Form.Group>
//       ))}
//       {buttonClick((e) => handleSubmit(e), "Save", "primary")}
//     </Form>
//   );
// };
//
// export default FormOrganism;
