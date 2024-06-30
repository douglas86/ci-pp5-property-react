import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { buttonClick, subheading } from "../atom/elements";
import { handleChange, handleImage, handleSubmit } from "../../utils/handlers";
import useAppContext from "../../hooks/useAppContext";
import styles from "../../styles/organism/Form.module.css";

const GeneralFormMolecule = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { form } = formsReducers;

  // const [formData, setFormData] = useState({
  //   property_address: form.populateForm[0].value,
  //   property_area: "",
  //   area_code: "",
  //   rent: "",
  // });

  const [formData, setFormData] = useState({});

  useEffect(() => {
    form.populateForm.map(({ name, value }) => {
      setFormData({ ...formData, [name]: value });
    });
  }, []);

  console.log("form", form);
  console.log("formData", formData);

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
            ({ index, label, type, placeholder, name, value }) => (
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
                  value={formData[name]}
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
            {buttonClick(
              (event) => handleSubmit(event, dispatch, form, formData),
              form.buttonText,
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

export default GeneralFormMolecule;
