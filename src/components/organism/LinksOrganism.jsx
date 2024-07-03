// components
import { buttonClick } from "../atom/elements";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// utilities
import { router } from "../../utils";
import { handleAuth, handleUserRole } from "../../utils/handlers";

// styling
import styles from "../../styles/organism/Links.module.css";
import ModalOrganism from "./ModalOrganism";
import LogoutForm from "./Forms/LogoutForm";
import LoginForm from "./Forms/LoginForm";

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksOrganism = () => {
  // destructuring state from state store
  const { state, dispatch } = useAppContext();
  const { userReducers, modalReducers } = state;
  const { templateModal } = modalReducers;

  // filters and returns the correct routers
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

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
