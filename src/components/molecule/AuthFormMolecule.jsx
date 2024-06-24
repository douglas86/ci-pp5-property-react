import useAppContext from "../../hooks/useAppContext";
import { useState } from "react";
import Form from "react-bootstrap/Form";

import styles from "../../styles/organism/Form.module.css";
import { buttonClick, subheading } from "../atom/elements";
import { handleChange, handleImage, handleSubmit } from "../../utils/handlers";

const AuthFormMolecule = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { authForm } = formsReducers;

  const [authData, setAuthData] = useState({});

  return (
    <>
      {authForm ? (
        <Form className={styles.container}>
          <div className={styles.subheading}>
            {authForm.loadForm ? (
              <>
                {subheading(authForm.subheadingText)}
                {buttonClick(
                  () => dispatch({ type: authForm.loadForm }),
                  "here?",
                  "link",
                )}
              </>
            ) : (
              <>{subheading(authForm.subheadingText)}</>
            )}
          </div>
          {authForm.populateForm.map(
            ({ index, label, type, placeholder, name }) => (
              <Form.Group
                className="mb-3"
                controlId={`${name}${index}`}
                key={index}
              >
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  onChange={
                    type === "file"
                      ? (e) => handleImage(e, authData, setAuthData)
                      : (e) => handleChange(e, authData, setAuthData)
                  }
                />
              </Form.Group>
            ),
          )}
          <div className={styles.subheading}>
            {authForm.aboveBtnForm ? (
              <>
                {subheading(authForm.aboveBtnText)}
                {buttonClick(
                  () => dispatch({ type: authForm.aboveBtnForm }),
                  "here?",
                  "link",
                )}
              </>
            ) : null}
          </div>
          <div className={styles.buttons}>
            {buttonClick(
              (event) => handleSubmit(event, dispatch, authForm, authData),
              authForm.buttonText,
              "success",
            )}
            {buttonClick(
              () => dispatch({ type: "TOGGLE HIDE MODAL" }),
              "Cancel",
              "primary",
            )}
          </div>
        </Form>
      ) : null}
    </>
  );
};

export default AuthFormMolecule;
