// 3rd party libraries
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";

// components
import { buttonClick, displayErrors, submitButton } from "../atom/elements";

// utilities
import { router } from "../../utils";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/molecule/Links.module.css";

const MyVerticallyCenteredModal = (props) => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const {
    formHeading,
    populateForm,
    submitData,
    errors,
    forms,
    dispatchType,
    tokenType,
  } = formsReducers;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(submitData, forms)
      .then(({ data }) => {
        dispatch({ type: "HIDE MODAL" });

        dispatch({ type: dispatchType, payload: data.user });
        dispatch({ type: tokenType, payload: data });
      })
      .catch((err) => {
        dispatch({
          type: "FORM VALIDATION ERRORS",
          payload: err.response.data,
        });
      });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const payload = {
      [name]: value,
    };

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
        <Form onSubmit={handleSubmit}>
          {populateForm.map(({ label, type, placeholder, name }, index) => (
            <Form.Group
              key={index}
              className="mb-3"
              controlId={`formBasic${label}`}
            >
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
              />
              {displayErrors(errors, name)}
            </Form.Group>
          ))}

          <div className={styles.buttonGroup}>
            {submitButton("primary")}
            {buttonClick(
              () => dispatch({ type: "HIDE MODAL" }),
              "Close",
              "warning",
            )}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksMolecule = () => {
  // destructuring state from state store
  const { state, dispatch } = useAppContext();
  const { userReducers, formsReducers } = state;
  const { showModal, populateForm } = formsReducers;

  // filters and returns the correct routers
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  const handleAuth = userReducers.user === null;

  console.log("userReducers", userReducers);

  return (
    <ul className={styles.ul}>
      {handleRouter.map(({ title, path }) => (
        <li key={title} className={styles.li}>
          <a href={path} className={styles.a}>
            {title}
          </a>
        </li>
      ))}
      {handleAuth ? (
        <li className={styles.li}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch({
                type: "POPULATE SIGN IN PAGE",
              })
            }
          >
            Sign In
          </button>
        </li>
      ) : (
        <li className={styles.li}>
          <button
            className={styles.button}
            onClick={() =>
              dispatch({
                type: "POPULATE SIGN OUT PAGE",
              })
            }
          >
            Sign Out
          </button>
        </li>
      )}
      {populateForm.length > 0 && (
        <MyVerticallyCenteredModal
          show={showModal}
          onHide={() => dispatch({ type: "HIDE MODAL", payload: false })}
        />
      )}
    </ul>
  );
};

export default LinksMolecule;
