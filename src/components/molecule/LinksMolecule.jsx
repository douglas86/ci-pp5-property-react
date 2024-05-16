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

  const { formHeading, populateForm, submitData } = formsReducers;
  const { errors, forms, dispatchType, tokenType } = formsReducers;
  const { dispatched, dispatchText } = formsReducers;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(submitData, forms)
      .then(({ data }) => {
        dispatch({ type: "HIDE MODAL" });

        dispatch({
          type: dispatchType,
          payload: !data.detail ? data.user : null,
        });
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

              {displayErrors(errors, items.name)}
              {errors && (
                <p className={styles.non_field}>{errors.non_field_errors}</p>
              )}
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
        {dispatchType && formHeading !== "Change Password" && (
          <div className={styles.buttonDispatch}>
            <p className={styles.p}>
              If you would like to change your password click
            </p>
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
