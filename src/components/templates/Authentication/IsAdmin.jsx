import { useEffect } from "react";

import NotFoundPage from "../../pages/NotFoundPage";

import useAppContext from "../../../hooks/useAppContext";

/**
 * Checks if the current user is an admin and renders the corresponding component or a NotFoundPage.
 *
 * @param {object} props - The component properties.
 * @param {React.ReactNode} props.children - The component's children.
 * @returns {JSX.Element} - The rendered component or NotFoundPage.
 */
const IsAdmin = ({ children }) => {
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
        userReducers.profile.role === "admin" ? (
          children
        ) : (
          <>
            <NotFoundPage />
          </>
        )
      ) : (
        <>
          <NotFoundPage />
        </>
      )}
    </>
  );
};

export default IsAdmin;
