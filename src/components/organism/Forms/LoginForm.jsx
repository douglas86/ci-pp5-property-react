import useAppContext from "../../../hooks/useAppContext";

import styles from "../../../styles/organism/Form.module.css";
import Form from "react-bootstrap/Form";
import { buttonClick, subheading } from "../../atom/elements";
import { useState } from "react";
import { handleChange } from "../../../utils/handlers";
import AxiosInstance from "../../../API/AxiosInstance";
import RegistrationForm from "./RegistrationForm";
import { getProfileData } from "../../../utils";
import ChangePasswordForm from "./ChangePasswordForm";

const LoginForm = () => {
  const { dispatch } = useAppContext();

  const [form, setForm] = useState({});

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
            await AxiosInstance.post("/dj-rest-auth/login/", form)
              .then(async (res) => {
                const results = await res.data.user;
                const { pk } = results;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({ type: "UPDATE USER DATA", payload: results });

                getProfileData(pk, dispatch);
              })
              .catch((err) => {
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
