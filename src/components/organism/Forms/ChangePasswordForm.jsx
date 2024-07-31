import { useState } from "react";
import Form from "react-bootstrap/Form";

import LoginForm from "./LoginForm";
import { buttonClick, subheading } from "../../atom/elements";

import useAppContext from "../../../hooks/useAppContext";

import { handleChange } from "../../../utils/handlers";

import { AxiosRegister } from "../../../API/AxiosInstance";

import styles from "../../../styles/organism/Form.module.css";

const ChangePasswordForm = () => {
  const { dispatch } = useAppContext();

  const [form, setForm] = useState({});

  return (
    <Form className={styles.container}>
      <div className={styles.subheading}>
        {subheading(
          "If you have all of a sudden remembered your password click",
        )}
        {buttonClick(
          () => {
            dispatch({
              type: "LOAD MODAL HEADER",
              payload: "Login Form",
            });
            dispatch({
              type: "LOAD FORM COMPONENT",
              payload: <LoginForm />,
            });
          },
          "here?",
          "link",
        )}
      </div>
      <div className={styles.group}>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label className={styles.groupLabel}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your username?"
              name="username"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label className={styles.groupLabel}>Old Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please enter your old Password?"
              name="old_password"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label className={styles.groupLabel}>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please enter your new password?"
              name="new_password"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
      </div>
      <div className={styles.buttons}>
        {buttonClick(
          async () => {
            await AxiosRegister.post("profiles/change_password/", form)
              .then((res) => {
                const results = res.data;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({
                  type: "SHOW SUCCESSFULLY ALERT MESSAGE",
                  payload:
                    results.message +
                    ". Please login with the changed password",
                });
              })
              .catch((err) => {
                dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
              });
          },
          "Change Password",
          "danger",
        )}
        {buttonClick(
          () => {
            dispatch({ type: "TOGGLE HIDE MODAL" });
          },
          "Cancel",
          "warning",
        )}
      </div>
    </Form>
  );
};

export default ChangePasswordForm;
