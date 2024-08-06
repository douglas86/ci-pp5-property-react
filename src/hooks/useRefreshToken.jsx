import { useEffect } from "react";
import Cookies from "js-cookie";

import AxiosInstance from "../API/AxiosInstance";

import { useAppDispatch, useAppState } from "./useAppContext";

import { getProfileData } from "../utils";

/**
 * Refreshes the authentication token and retrieves user data using the given `refreshToken`.
 *
 * @function
 * @name useRefreshToken
 *
 * @returns {void}
 */
const useRefreshToken = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const { userReducers } = state;

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
          userReducers === {} &&
            handleUserData()
              .then(async (res) => {
                const results = await res.data;
                dispatch({ type: "UPDATE USER DATA", payload: results });
                await getProfileData(res, dispatch);
              })
              .catch((err) => {
                dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
              });
        })
        .catch((error) => {
          dispatch({ type: "ERROR UPDATING USER DATA", payload: error });
        });
  }, [dispatch, refreshToken, userReducers]);
};

export default useRefreshToken;
