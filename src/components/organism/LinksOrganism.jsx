// components
import ModalOrganism from "./ModalOrganism";
import { buttonClick } from "../atom/elements";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/organism/Links.module.css";

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksOrganism = () => {
  // destructuring state from state store
  const { state, dispatch } = useAppContext();
  const { userReducers, modalReducers } = state;
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
  const handleUserRole = !!(
    userReducers.profile && userReducers.profile.role === "admin"
  );
  const handlePath = (path, IsAdmin, IsUser) =>
    path === "/dashboard" ? (handleUserRole ? IsAdmin : IsUser) : path;

  return (
    <ul className={styles.ul}>
      {handleRouter.map(({ title, path, IsAdmin, IsUser }) => (
        <li key={title} className={styles.li}>
          <a href={`${handlePath(path, IsAdmin, IsUser)}`} className={styles.a}>
            {title === "Dashboard" ? (handleAuth ? null : title) : title}
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
    </ul>
  );
};

export default LinksOrganism;
