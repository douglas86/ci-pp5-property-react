import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { buttonClick, subheading } from "../../atom/elements";

import useAppContext from "../../../hooks/useAppContext";
import { handleChange, handleImage } from "../../../utils/handlers";
import AxiosInstance from "../../../API/AxiosInstance";

import styles from "../../../styles/organism/Form.module.css";

const CreatePropertyForm = () => {
  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  const [form, setForm] = useState({});

  return (
    <Form className={styles.container}>
      <div className={styles.subheading}>
        {subheading("Please create a new property below?")}
      </div>
      <div className={styles.group}>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your address"
              name="property_address"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label>Town</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your town"
              name="property_area"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your postcode"
              name="area_code"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label>Rent</Form.Label>
            <Form.Control
              type="number"
              placeholder="Please enter your rent code"
              name="rent"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label>Property Photo</Form.Label>
            <Form.Control
              type="file"
              placeholder="Please upload a picture"
              name="property_image"
              onChange={(e) => handleImage(e, form, setForm)}
            />
          </Form.Group>
        </div>
      </div>
      <div className={styles.buttons}>
        {buttonClick(
          async () => {
            await AxiosInstance.post("/stocks/create/", form)
              .then((res) => {
                const { message } = res.data;
                navigate("/dashboard/admin/properties/");
                dispatch({
                  type: "SHOW SUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
              })
              .catch((err) => {
                const { message } = err;
                dispatch({
                  type: "SHOW UNSUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
              });
          },
          "Create Property",
          "success",
        )}
        {buttonClick(
          () => navigate("/dashboard/admin/properties/"),
          "Cancel",
          "warning",
        )}
      </div>
    </Form>
  );
};

export default CreatePropertyForm;
