import Form from "react-bootstrap/Form";
import { useState } from "react";

import RegistrationForm from "./RegistrationForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { buttonClick, error, subheading } from "../../atom/elements";

import { useAppDispatch } from "../../../hooks/useAppContext";

import { handleChange } from "../../../utils/handlers";
import { AxiosRegister } from "../../../API/AxiosInstance";
import { getProfileData } from "../../../utils";

import styles from "../../../styles/organism/Form.module.css";

/**
 * Represents a login form component.
 * @constructor
 */
const LoginForm = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  return (
    <Form className={styles.container}>
      <div className={styles.subheading}>
        {subheading("If you have not yet registered please register")}
        {buttonClick(
          () => {
            dispatch({
              type: "LOAD MODAL HEADER",
              payload: "Registration Form",
            });
            dispatch({
              type: "LOAD FORM COMPONENT",
              payload: <RegistrationForm />,
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
              placeholder="Please enter your username"
              name="username"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label className={styles.groupLabel}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please enter your password"
              name="password"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
          {errors &&
            Object.keys(errors).length > 0 &&
            Object.values(errors).map((e, i) => <div key={i}>{error(e)}</div>)}
        </div>
      </div>
      <div className={styles.subheading}>
        {subheading("Please change your password")}
        {buttonClick(
          () => {
            dispatch({
              type: "LOAD MODAL HEADER",
              payload: "Change Password Form",
            });
            dispatch({
              type: "LOAD FORM COMPONENT",
              payload: <ChangePasswordForm />,
            });
          },
          "here?",
          "link",
        )}
      </div>
      <div className={styles.buttons}>
        {buttonClick(
          async () => {
            await AxiosRegister.post("dj-rest-auth/login/", form)
              .then(async (res) => {
                console.log("res1", res);
                await getProfileData(res, dispatch);
              })
              .catch((err) => {
                const { data } = err.response;
                console.log("err1", err);
                setErrors(data);
                dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
              });
          },
          "Login",
          "success",
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

export default LoginForm;
