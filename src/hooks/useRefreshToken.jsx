// 3rd party libraries
import { useEffect } from "react";

// API defaults
import AxiosInstance from "../API/AxiosInstance";

// custom hooks
import useAppContext from "./useAppContext";

/**
 * Custom hook to gather users and profile data while refreshing tokens
 */
const useRefreshToken = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    // fetch users data
    AxiosInstance.get("/dj-rest-auth/user/")
      // if a user is logged in
      .then(async (res) => {
        const results = await res.data;
        const { pk } = results;
        // store user data to state store
        dispatch({ type: "UPDATE USER DATA", payload: results });

        // fetch users profile data
        AxiosInstance.get(`/profiles/${pk}/`)
          .then(async (res) => {
            const data = await res.data[0];
            // store profile data to state store
            dispatch({ type: "UPDATE PROFILE DATA", payload: data });
          })
          .catch((err) => {
            dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
          });
      })
      // if a user is not logged in
      .catch((err) => {
        dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
      });

    // refresh user token
    AxiosInstance.post("dj-rest-auth/token/refresh/")
      .then(async (res) => {
        const results = await res.data;
        dispatch({ type: "LOGIN USER", payload: results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
      });
  }, [dispatch]);
};

export default useRefreshToken;
