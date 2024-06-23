import { useState } from "react";
import Form from "react-bootstrap/Form";
import { buttonClick, subheading } from "../atom/elements";
import { handleChange, handleImage, handleSubmit } from "../../utils/handlers";
import useAppContext from "../../hooks/useAppContext";
import styles from "../../styles/organism/Form.module.css";

const GeneralFormMolecule = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { form } = formsReducers;

  const [formData, setFormData] = useState({});

  const submission = (event) => {
    dispatch({ type: "TOGGLE HIDE MODAL" });

    handleSubmit(event, form, formData)
      .then((res) => {
        dispatch({
          type: form.Success.update_user,
          payload: form.Success.payload ? res : null,
        });
        dispatch({ type: "SHOW ALERT MESSAGE", payload: form.Success.message });
      })
      .catch((err) => {
        dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
      });
  };

  return (
    <>
      {form ? (
        <Form className={styles.container}>
          <div className={styles.subheading}>
            {form.loadForm ? (
              <>
                {subheading(form.subheadingText)}
                {buttonClick(
                  () => dispatch({ type: form.loadForm }),
                  "here?",
                  "link",
                )}
              </>
            ) : (
              <>{subheading(form.subheadingText)}</>
            )}
          </div>
          {form.populateForm.map(
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
                      ? (e) => handleImage(e, formData, setFormData)
                      : (e) => handleChange(e, formData, setFormData)
                  }
                />
              </Form.Group>
            ),
          )}
          <div className={styles.subheading}>
            {form.aboveBtnForm ? (
              <>
                {subheading(form.aboveBtnText)}
                {buttonClick(
                  () => dispatch({ type: form.aboveBtnForm }),
                  "here?",
                  "link",
                )}
              </>
            ) : null}
          </div>
          <div className={styles.buttons}>
            {buttonClick((e) => submission(e), form.buttonText, "success")}
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

export default GeneralFormMolecule;
