import { useEffect } from "react";

import NotFoundPage from "../../pages/NotFoundPage";

import useAppContext from "../../../hooks/useAppContext";

/**
 * IsUser Component.
 *
 * A component that checks if the user is authenticated and has the role of "user".
 * If the user is authenticated and has the role of "user", it renders the provided children.
 * If the user is not authenticated or has a different role, it renders the NotFoundPage component.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The components to render if the user is authenticated and has the role of "user".
 *
 * @example
 * return (* <IsUser>
 *     <DashboardPage />
 *   </IsUser> *);
 */
const IsUser = ({ children }) => {
  const { state, dispatch } = useAppContext();
  const { userReducers } = state;

  useEffect(() => {
    userReducers.user === null && dispatch({ type: "SIGN IN FORM" });
    userReducers.user === null
      ? dispatch({ type: "TOGGLE SHOW MODAL" })
      : dispatch({ type: "TOGGLE HIDE MODAL" });
  }, [userReducers.user, dispatch]);

  return (
    <>
      {userReducers.profile ? (
        userReducers.profile.role === "user" ? (
          children
        ) : (
          <>
            <NotFoundPage />
          </>
        )
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default IsUser;
