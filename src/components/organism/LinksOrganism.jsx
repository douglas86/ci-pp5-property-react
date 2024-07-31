import { buttonClick } from "../atom/elements";
import ModalOrganism from "./ModalOrganism";
import LogoutForm from "./Forms/LogoutForm";
import LoginForm from "./Forms/LoginForm";

import useAppContext from "../../hooks/useAppContext";
import { router } from "../../utils";
import { handleAuth, handleUserRole } from "../../utils/handlers";

import styles from "../../styles/organism/Links.module.css";

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { userReducers, modalReducers } = state;
  const { templateModal } = modalReducers;

  /**
   * Filters the items in the router based on specific conditions.
   *
   * @param {Array} router - The router to filter.
   * @returns {Array} - The filtered router items.
   */
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  /**
   * Handles the path based on the given conditions.
   *
   * @param {string} title - The title of the page.
   * @param {string} path - The path of the page.
   * @param {boolean} IsAdmin - Flag indicating if the user is an admin.
   * @param {boolean} IsUser - Flag indicating if the user is a regular user.
   * @returns {string} - The resulting path.
   */
  const handlePath = (title, path, IsAdmin, IsUser) =>
    title === "Dashboard"
      ? handleUserRole(userReducers.profile)
        ? IsAdmin
        : userReducers.user
          ? IsUser
          : false
      : path;

  return (
    <ul className={styles.ul}>
      {handleRouter.map(({ title, path, IsAdmin, IsUser }) => (
        <li key={title} className={styles.li}>
          <a
            href={`${handlePath(title, path, IsAdmin, IsUser)}`}
            className={styles.a}
          >
            {title === "Dashboard"
              ? handleAuth(userReducers.user)
                ? null
                : title
              : title}
          </a>
        </li>
      ))}
      {/*authentication button*/}
      {handleAuth(userReducers.user) ? (
        <li className={styles.li}>
          {buttonClick(
            () => {
              dispatch({ type: "LOAD MODAL HEADER", payload: "Login Form" });
              dispatch({ type: "LOAD FORM COMPONENT", payload: <LoginForm /> });
            },
            "Login",
            "dark",
          )}
        </li>
      ) : (
        <li className={styles.li}>
          {buttonClick(
            () => {
              dispatch({ type: "LOAD MODAL HEADER", payload: "Logout Form" });
              dispatch({
                type: "LOAD FORM COMPONENT",
                payload: <LogoutForm />,
              });
            },
            "Logout",
            "dark",
          )}
        </li>
      )}
      <ModalOrganism
        show={templateModal}
        onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
      />
    </ul>
  );
};

export default LinksOrganism;
