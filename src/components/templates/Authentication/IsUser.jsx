import useAppContext from "../../../hooks/useAppContext";
import { useEffect } from "react";
import NotFoundPage from "../../pages/NotFoundPage";

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
