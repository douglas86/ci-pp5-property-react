import { useEffect, useMemo } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../API/axiosDefaults";
import useAppContext from "./useAppContext";

const useRefreshToken = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const handleMount = async () => {
      try {
        return await axios.get("dj-rest-auth/user/");
      } catch (err) {
        dispatch({ type: "UPDATE USER DATA", payload: null });
      }
    };

    handleMount()
      .then((data) =>
        data
          ? dispatch({ type: "UPDATE USER DATA", payload: data.data })
          : dispatch({ type: "UPDATE USER DATA", payload: null }),
      )
      .catch(() => dispatch({ type: "UPDATE USER DATA", payload: null }));
  }, [dispatch]);

  useMemo(() => {
    axiosReq.interceptors.response.use(
      async (config) => {
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          return config;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      },
    );

    axiosRes.interceptors.response.use(
      (response) => dispatch({ type: "UPDATE USER DATA", payload: response }),
      async (err) => {
        if (err.response?.status === 401) {
          dispatch({ type: "UPDATE USER DATA", payload: null });
        }
        return Promise.reject(err);
      },
    );
  }, [dispatch]);
};

export default useRefreshToken;
