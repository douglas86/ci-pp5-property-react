// 3rd party library
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

// utilities
import { axiosReq, axiosRes } from "../API/axiosDefaults";

// custom hooks
import useAppContext from "./useAppContext";

/**
 * custom hook used to refresh the user's data with the refresh token
 */
const useRefreshToken = () => {
  // state destructuring
  const { state, dispatch } = useAppContext();
  const { userReducers } = state;

  const handleMount = async () => {
    try {
      return await axios.get("dj-rest-auth/user/");
    } catch (error) {
      dispatch({ type: "UPDATE USER DATA", payload: null });
    }
  };

  useEffect(() => {
    handleMount()
      .then(({ data }) => dispatch({ type: "UPDATE USER DATA", payload: data }))
      .catch((err) => dispatch({ type: "UPDATE USER DATA", payload: null }));
  }, []);

  // declare variables
  // const history = useNavigate(); // redirect to specific url

  // const handleMount = async () => {
  //   return await axiosRes.get("dj-rest-auth/user/");
  // };

  // const handleMount = async () => {
  //   axiosReq.interceptors.response.use(
  //     async (response) => {
  //       try {
  //         await axios.get("dj-rest-auth/user/");
  //       } catch (err) {
  //         console.log("error", err);
  //       }
  //     },
  //     (err) => {
  //       return Promise.reject(err);
  //     },
  //   );
  //
  //   axiosRes.interceptors.response.use(
  //     async (response) => response,
  //     async (err) => {
  //       if (err.response?.status === 401) {
  //         console.log("mistake");
  //       }
  //       return Promise.reject(err);
  //     },
  //   );
  // };
  //
  // useEffect(() => {
  //   handleMount()
  //     .then((data) => {
  //       dispatch({ type: "UPDATE USER DATA", payload: data });
  //       console.log("data", data);
  //     })
  //     .catch((err) => {
  //       dispatch({ type: "USER DATA ERROR", payload: "None", error: err });
  //       console.log("error", err);
  //     });
  // }, [dispatch]);
  //
  // console.log("You are here");

  useMemo(() => {
    axiosReq.interceptors.response.use(
      async (config) => {
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          if (userReducers === "None") {
            console.log("userReducers error");
            // history("/sign-in");
          }
          console.log("config");
          return config;
        }
        console.log("config1");
        return config;
      },
      (err) => {
        console.log("rejected");
        return Promise.reject(err);
      },
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          // this will get rid of the post-unauthorized error in the console
          console.log("I have made a mistake");
          // try {
          //   await axios.post("/dj-rest-auth/token/refresh/");
          //   console.log("data");
          // } catch (error) {
          //   if (userReducers === "None") {
          //     console.log("error2");
          //     // history("/sign-in");
          //   }
          //   console.log("null");
          //   return null;
          // }

          // console.log("axios");
          // return axios(err.config);
        }
        console.log("rejected2");
        return Promise.reject(err);
      },
    );
  }, [userReducers]);
};

export default useRefreshToken;
