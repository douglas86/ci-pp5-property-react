// components
import ModalMolecule from "./ModalMolecule";

// utilities
import { router } from "../../utils";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/molecule/Links.module.css";

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
        <ModalMolecule
          show={showModal}
          onHide={() => dispatch({ type: "HIDE MODAL", payload: false })}
        />
      )}
    </ul>
  );
};

export default LinksMolecule;
