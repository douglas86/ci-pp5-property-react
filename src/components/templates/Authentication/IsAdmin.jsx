import useAppContext from "../../../hooks/useAppContext";
import NotFoundPage from "../../pages/NotFoundPage";
import { useEffect } from "react";

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
