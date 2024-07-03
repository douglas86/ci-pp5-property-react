// 3rd party libraries
import { useEffect } from "react";

// API defaults
import AxiosInstance from "../API/AxiosInstance";

// custom hooks
import useAppContext from "./useAppContext";
import { getProfileData } from "../utils";

/**
 * Custom hook to gather users and profile data while refreshing tokens
 */
const useRefreshToken = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    // refresh user token
    AxiosInstance.post("dj-rest-auth/token/refresh/")
      .then(() => {
        // fetch users' data
        AxiosInstance.get("/dj-rest-auth/user/")
          // if a user is logged in
          .then(async (res) => {
            const results = await res.data;
            const { pk } = results;
            // store user data to state store
            dispatch({ type: "UPDATE USER DATA", payload: results });

            // fetch users profile data
            getProfileData(pk, dispatch);
          })
          // if a user is not logged in
          .catch((err) => {
            dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
          });
      })
      .catch((err) => {
        dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
        dispatch({ type: "LOGOUT USER" });
      });
  }, [dispatch]);
};

export default useRefreshToken;
