// custom hooks
import useAppContext from "../../hooks/useAppContext";

// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Links.module.css";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { buttonClick, submitButton } from "../atom/elements";

const MyVerticallyCenteredModal = (props) => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { formHeading, populateForm } = formsReducers;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form was submitted");
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
  const { showModal } = formsReducers;

  // filters and returns the correct routers
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  const handleAuth = userReducers === "None";

  console.log("formsReducers", formsReducers);

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
      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => dispatch({ type: "HIDE MODAL", payload: false })}
      />
    </ul>
  );
};

export default LinksMolecule;
