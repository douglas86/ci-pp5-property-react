import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../API/axiosDefaults";
import useAppContext from "./useAppContext";

const useRefreshToken = () => {
  const { dispatch } = useAppContext();

  const [refreshToken, setRefreshToken] = useState(null);

  const handleMount = async () => {
    try {
      return await axios.get("dj-rest-auth/user/");
    } catch (err) {
      dispatch({ type: "UPDATE USER DATA", payload: null });
    }
  };

  useEffect(() => {
    handleMount()
      .then((data) =>
        data
          ? dispatch({ type: "UPDATE USER DATA", payload: null })
          : dispatch({ type: "UPDATE FORM STATE", payload: data.data.user }),
      )
      .catch((err) => dispatch({ type: "UPDATE USER DATA", payload: null }));
  }, []);

  useMemo(() => {
    axiosReq.interceptors.response.use(
      async (config) => {
        try {
          console.log("error9");
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          console.log("error6");
          return config;
        }
        console.log("error7");
        return config;
      },
      (err) => {
        console.log("error8");
        return Promise.reject(err);
      },
    );

    axiosRes.interceptors.response.use(
      (response) => dispatch({ type: "UPDATE USER DATA", payload: response }),
      async (err) => {
        if (err.response?.status === 401) {
          dispatch({ type: "UPDATE USER DATA", payload: null });
        }
        //   try {
        //     await axios.post("/dj-rest-auth/token/refresh/");
        //   } catch (error) {
        //     setRefreshToken((prevCurrentUser) => {
        //       if (prevCurrentUser) {
        //         console.log("Another detour");
        //       }
        //       console.log("error");
        //       return null;
        //     });
        //   }
        //   console.log("error2");
        //   // return axios(err.config);
        // }
        return Promise.reject(err);
      },
    );
  }, [dispatch]);

  console.log("refreshToken", refreshToken);
};

export default useRefreshToken;
