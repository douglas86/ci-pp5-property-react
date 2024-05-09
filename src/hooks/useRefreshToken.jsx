// 3rd party library
import axios from "axios";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

// utilities
import { axiosReq, axiosRes } from "../utils/axiosDefaults";

// custom hooks
import useAppContext from "./useAppContext";

/**
 * custom hook used to refresh the user's data with the refresh token
 */
const useRefreshToken = () => {
  // declare variables
  const history = useNavigate(); // redirect to specific url

  // state destructuring
  const { state } = useAppContext();
  const { userReducers } = state;

  useMemo(() => {
    axiosReq.interceptors.response.use(
      async (config) => {
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          if (userReducers === "None") {
            history("/sign-in");
          }
          return config;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      },
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (error) {
            if (userReducers === "None") {
              history("/sign-in");
            }
            return null;
          }

          return axios(err.config);
        }
        return Promise.reject(err);
      },
    );
  }, [history, userReducers]);
};

export default useRefreshToken;
