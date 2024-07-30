// 3rd party libraries
import { useEffect } from "react";
import Cookies from "js-cookie";

// API defaults
import AxiosInstance from "../API/AxiosInstance";

// custom hooks
import useAppContext from "./useAppContext";

// utilities
import { getProfileData } from "../utils";

/**
 * Custom hook to gather users and profile data while refreshing tokens
 */
const useRefreshToken = () => {
  const { dispatch } = useAppContext();

  const refreshToken = Cookies.get("refresh-token");

  useEffect(() => {
    /**
     * Handles refreshing the authentication token using the given `refreshToken`.
     *
     * @async
     * @returns {Promise<Object>} - A Promise that resolves to the refreshed token
     *                            or rejects with an error if the refresh request fails.
     */
    const handleRefreshToken = async () => {
      try {
        return await AxiosInstance.post("dj-rest-auth/token/refresh/", {
          refresh: refreshToken,
        });
      } catch (error) {
        return error;
      }
    };

    /**
     * Retrieves the user data using an Axios instance.
     * @async
     * @returns {Promise<Object|Error>} - A promise that resolves with the user data if successful, or rejects with an error.
     */
    const handleUserData = async () => {
      try {
        return await AxiosInstance.get("dj-rest-auth/user/");
      } catch (error) {
        return error;
      }
    };

    /**
     * Promises used to refresh tokens, fetch user and profile data
     * @returns {Promise<Object|Error>} -
     *  A promise used to store Profile data to state store - or error data to state store if needed
     */
    refreshToken &&
      handleRefreshToken()
        .then(() => {
          handleUserData()
            .then(async (res) => {
              const results = await res;
              console.log("results", results);
              dispatch({ type: "UPDATE USER DATA", payload: res });
              await getProfileData(res, dispatch);
            })
            .catch((err) => {
              dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
            });
        })
        .catch((error) => {
          dispatch({ type: "ERROR UPDATING USER DATA", payload: error });
        });
  }, [dispatch, refreshToken]);
};

export default useRefreshToken;
