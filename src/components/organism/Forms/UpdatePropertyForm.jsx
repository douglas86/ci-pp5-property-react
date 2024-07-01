import Form from "react-bootstrap/Form";

import styles from "../../../styles/organism/Form.module.css";
import { buttonClick, subheading } from "../../atom/elements";
import { useState } from "react";
import { handleChange, handleImage } from "../../../utils/handlers";
import AxiosInstance from "../../../API/AxiosInstance";
import useAppContext from "../../../hooks/useAppContext";

const UpdatePropertyForm = ({ data }) => {
  const { dispatch } = useAppContext();

  const [form, setForm] = useState({
    id: data.id,
    name: data.name,
    property_address: data.address,
    property_area: data.area,
    area_code: data.postcode,
    rent: `${data.rent}`,
    image: "",
  });

  return (
    <Form className={styles.container}>
      <div className={styles.subheading}>
        {subheading("You can update the property data down below?")}
      </div>
      {Object.entries(form).map(([key]) => (
        <>
          {key === "id" || key === "image" ? null : (
            <Form.Group
              className="mb-3"
              controlId={`${data.name}${data.id}`}
              key={key}
            >
              <Form.Label>{key}</Form.Label>
              <Form.Control
                type="text"
                name={key}
                value={form[key]}
                onChange={(e) => handleChange(e, form, setForm)}
              />
            </Form.Group>
          )}
        </>
      ))}
      <Form.Group
        className="mb-3"
        controlId={`${data.name}${data.id}`}
        key={data.id}
      >
        <Form.Label></Form.Label>
        <Form.Control
          type="file"
          name={form.image}
          onChange={(e) => handleImage(e, form, setForm)}
        />
      </Form.Group>
      <div className={styles.buttons}>
        {buttonClick(
          () =>
            AxiosInstance.post(`stocks/update/${data.id}/`, form)
              .then((res) => {
                const { message } = res.data;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({
                  type: "SHOW SUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
              })
              .catch((err) => {
                const { message } = err;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({
                  type: "SHOW UNSUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
              }),
          "Update",
          "success",
        )}
        {buttonClick(
          () => console.log("Canceled clicked"),
          "Cancel",
          "warning",
        )}
      </div>
    </Form>
  );
};

export default UpdatePropertyForm;
