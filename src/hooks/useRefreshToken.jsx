import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../API/axiosDefaults";
import useAppContext from "./useAppContext";

const useRefreshToken = () => {
  const { dispatch } = useAppContext();

  const [refreshToken, setRefreshToken] = useState(null);

  const handleMount = async () => {
    try {
      return await axiosRes.get("dj-rest-auth/user/");
    } catch (err) {
      setRefreshToken(null);
    }
  };

  useEffect(() => {
    handleMount()
      .then(({ data }) => dispatch({ type: "UPDATE USER DATA", payload: data }))
      .catch((err) => dispatch({ type: "UPDATE USER DATA", payload: null }));
  }, []);

  useMemo(() => {
    axiosReq.interceptors.response.use(
      async (config) => {
        try {
          console.log("error9");
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          setRefreshToken((prevCurrentUser) => {
            if (prevCurrentUser) {
              console.log("You are here");
            }
            console.log("error5");
            return null;
          });
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
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (error) {
            setRefreshToken((prevCurrentUser) => {
              if (prevCurrentUser) {
                console.log("Another detour");
              }
              console.log("error");
              return null;
            });
          }
          console.log("error2");
          // return axios(err.config);
        }
        console.log("error3");
        return Promise.reject(err);
      },
    );
  }, []);

  console.log("refreshToken", refreshToken);

  console.log("error4");
  return refreshToken;
};

export default useRefreshToken;
