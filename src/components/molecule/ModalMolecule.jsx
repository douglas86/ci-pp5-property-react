// 3rd party libraries
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";

// components
import { buttonClick, displayErrors, submitButton } from "../atom/elements";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/molecule/Links.module.css";

/**
 * This Molecule is used for displaying of the model when using authentication
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ModalMolecule = (props) => {
  // importing the formReducers from state store
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;

  // destructuring objects from formsReducer function
  const { formHeading, populateForm, submitData } = formsReducers;
  const { errors, forms, dispatchType, tokenType } = formsReducers;
  const { dispatched, dispatchText, alertMessage } = formsReducers;

  // handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // hide model when you click a submitted form
    dispatch({ type: "HIDE MODAL" });

    // posting data to API
    await axios
      .post(submitData, forms)
      .then(({ data }) => {
        // saves user to state store on success
        dispatch({
          type: dispatchType,
          payload: !data.detail ? data.user : null,
        });
        // saves access and refresh tokens on success
        dispatch({ type: tokenType, payload: data });

        // show an alert message on success
        dispatch({ type: "SHOW ALERT MESSAGE", payload: alertMessage });
      })
      .catch((err) => {
        dispatch({
          type: "FORM VALIDATION ERRORS",
          payload: err.response.data,
        });
      });
  };

  // handling state on inputs in forms
  const handleChange = (e) => {
    e.preventDefault();

    // object destructuring of name and value from event
    const { name, value } = e.target;

    // object to be added to form state store
    const payload = {
      [name]: value,
    };

    // calling dispatch to add payload to state store
    dispatch({ type: "UPDATE FORM STATE", payload });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {formHeading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*this is used to switch between sign-in and register page*/}
        {dispatched && (
          <div className={styles.buttonDispatch}>
            <p className={styles.p}>{dispatchText}</p>
            {buttonClick(() => dispatch({ type: dispatched }), "here", "link")}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          {populateForm.map((items, index) => (
            <Form.Group
              key={index}
              className="mb-3"
              controlId={`formBasic${items.label}`}
            >
              <Form.Label>{items.label}</Form.Label>
              {items.type && (
                <Form.Control
                  type={items.type}
                  placeholder={items.placeholder}
                  name={items.name}
                  onChange={handleChange}
                />
              )}

              {/*if errors occur from the API*/}
              {displayErrors(errors, items.name)}
              {errors && (
                <p className={styles.non_field}>{errors.non_field_errors}</p>
              )}
            </Form.Group>
          ))}

          {/*submit and cancel button on form*/}
          <div className={styles.buttonGroup}>
            {submitButton("primary")}
            {buttonClick(
              () => dispatch({ type: "HIDE MODAL" }),
              "Close",
              "warning",
            )}
          </div>
        </Form>
        {/*changing of password*/}
        {/*  only show on sign-in and register page*/}
        {dispatched && formHeading !== "Change Password" && (
          <div className={styles.buttonDispatch}>
            <p className={styles.p}>
              If you would like to change your password click
            </p>
            {/*if the button clicked will switch you over to the change password page*/}
            {buttonClick(
              () => dispatch({ type: "POPULATE CHANGE PASSWORD PAGE" }),
              "here",
              "link",
            )}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalMolecule;
