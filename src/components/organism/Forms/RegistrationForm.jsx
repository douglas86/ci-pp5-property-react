import { useState } from "react";
import Form from "react-bootstrap/Form";

import LoginForm from "./LoginForm";
import { buttonClick, error, subheading } from "../../atom/elements";

import { useAppDispatch } from "../../../hooks/useAppContext";
import { handleChange } from "../../../utils/handlers";
import { AxiosRegister } from "../../../API/AxiosInstance";
import { getProfileData } from "../../../utils";

import styles from "../../../styles/organism/Form.module.css";

const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  return (
    <Form className={styles.container}>
      <div className={styles.subheading}>
        {subheading("If you have already registered please click")}
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
              placeholder="Please enter your username"
              name="username"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
          {errors?.username && error(errors.username)}
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label className={styles.groupLabel}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please enter your password"
              name="password1"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
          {errors?.password1 && error(errors.password1)}
        </div>
        <div className={styles.groupItem}>
          <Form.Group>
            <Form.Label className={styles.groupLabel}>
              Re-type password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Please re-type your password"
              name="password2"
              onChange={(e) => handleChange(e, form, setForm)}
            />
          </Form.Group>
          {errors?.password2 && error(errors.password2)}
          {errors?.non_field_errors && error(errors.non_field_errors)}
        </div>
      </div>
      <div className={styles.buttons}>
        {buttonClick(
          async () => {
            await AxiosRegister.post("/dj-rest-auth/registration/", form)
              .then(async (res) => await getProfileData(res, dispatch))
              .catch((err) => {
                const { data } = err.response;
                setErrors(data);
                dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
              });
          },
          "Register",
          "success",
        )}
        {buttonClick(
          () => dispatch({ type: "TOGGLE HIDE MODAL" }),
          "Cancel",
          "warning",
        )}
      </div>
    </Form>
  );
};

export default RegistrationForm;
