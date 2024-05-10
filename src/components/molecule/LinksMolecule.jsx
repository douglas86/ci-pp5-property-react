// custom hooks
import useAppContext from "../../hooks/useAppContext";

// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Links.module.css";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksMolecule = () => {
  // destructuring state from state store
  const { state, dispatch } = useAppContext();
  const { userReducers, formsReducers } = state;
  const { modalShow } = formsReducers;

  // filters and returns the correct routers
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  // filters and returns if you can sign in or sign out
  const handleAuth = router.filter((items) => {
    return userReducers === "None"
      ? items.title === "Sign In"
      : items.title === "Sign Out";
  });

  console.log("modalShow", modalShow);

  return (
    <ul className={styles.ul}>
      {handleRouter.map(({ title, path }) => (
        <li key={title} className={styles.li}>
          <a href={path} className={styles.a}>
            {title}
          </a>
        </li>
      ))}
      {handleAuth.map(({ title, path }) => (
        <>
          <Button
            variant="primary"
            key={title}
            onClick={() =>
              dispatch({ type: "TOGGLE SHOW MODAL", payload: true })
            }
          >
            {title}
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() =>
              dispatch({ type: "TOGGLE SHOW MODAL", payload: false })
            }
          />
        </>
      ))}
    </ul>
  );
};

export default LinksMolecule;

// {handleAuth.map(({ title, path }) => (
//     <li key={title} className={styles.li}>
//       <a href={path} className={styles.a}>
//         {title}
//       </a>
//     </li>
// ))}
