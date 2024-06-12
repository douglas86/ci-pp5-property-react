// components
import ModalMolecule from "./ModalMolecule";
import { buttonClick } from "../atom/elements";

// utilities
import { router } from "../../utils";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/molecule/Links.module.css";
import ModalOrganism from "../organism/ModalOrganism";

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksMolecule = () => {
  // destructuring state from state store
  const { state, dispatch } = useAppContext();
  const { userReducers, formsReducers, modalReducers } = state;
  const { populateForm } = formsReducers;
  const { showModal } = modalReducers;

  // filters and returns the correct routers
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  // check if the user is logged in or not
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
      {/*authentication button*/}
      {handleAuth ? (
        <li className={styles.li}>
          {buttonClick(
            () => {
              dispatch({ type: "SIGN IN FORM" });
              dispatch({ type: "TOGGLE SHOW MODAL" });
            },
            "Login",
            "dark",
          )}
        </li>
      ) : (
        <li className={styles.li}>
          {buttonClick(
            () => {
              dispatch({ type: "SIGN OUT FORM" });
              dispatch({ type: "TOGGLE SHOW MODAL" });
            },
            "Logout",
            "dark",
          )}
        </li>
      )}
      <ModalOrganism
        show={showModal}
        onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
      />
      {/*{populateForm.length > 0 && (*/}
      {/*  <ModalMolecule*/}
      {/*    show={showModal}*/}
      {/*    onHide={() => dispatch({ type: "HIDE MODAL", payload: false })}*/}
      {/*  />*/}
      {/*)}*/}
    </ul>
  );
};

export default LinksMolecule;
