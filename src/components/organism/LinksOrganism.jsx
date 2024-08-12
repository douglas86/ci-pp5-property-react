import { buttonClick } from "../atom/elements";
import ModalOrganism from "./ModalOrganism";
import LogoutForm from "./Forms/LogoutForm";
import LoginForm from "./Forms/LoginForm";

import { useAppDispatch, useAppState } from "../../hooks/useAppContext";
import { router } from "../../utils";
import { handleUserRole } from "../../utils/handlers";

import styles from "../../styles/organism/Links.module.css";

/**
 * This organism if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksOrganism = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const { userReducers, modalReducers } = state;
  const { templateModal } = modalReducers;

  // This function will handle the displaying of the titles on the navbar
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  // handle displaying of which dashboard between user or admin
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
            {title === "Dashboard" ? (userReducers.user ? title : null) : title}
          </a>
        </li>
      ))}
      {/*authentication button*/}
      {userReducers.user ? (
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
      ) : (
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
      )}
      <ModalOrganism
        show={templateModal}
        onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
      />
    </ul>
  );
};

export default LinksOrganism;
