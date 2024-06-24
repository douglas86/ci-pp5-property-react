// components
import ModalOrganism from "./ModalOrganism";
import { buttonClick } from "../atom/elements";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/organism/Links.module.css";
import { renderIntoDocument } from "react-dom/test-utils";

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

  // TODO: add permissions to the routes
  // TODO: first check - if the user is logged in
  // TODO: only show dashboard on Navbar to logged in users
  // TODO: second check - only admin users can access admin pages
  // TODO: if not admin display not found page or a 404 error page
  // TODO: third check - only users can access users pages
  // TODO: if not a user display not found page or a 404 error page

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

  console.log("handleUserRole", handleUserRole);
  console.log("handleAuth", handleAuth);

  return (
    <ul className={styles.ul}>
      {handleRouter.map(({ title, path, IsAdmin, IsUser }) => (
        <li key={title} className={styles.li}>
          <a href={path} className={styles.a}>
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
