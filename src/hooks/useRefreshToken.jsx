import useAppContext from "./useAppContext";
import { useEffect } from "react";
import axiosDefaults from "../API/axiosDefaults";
import AxiosDefaults from "../API/axiosDefaults";

const useRefreshToken = () => {
  const { state, dispatch } = useAppContext();
  const { userReducers } = state;

  useEffect(() => {
    axiosDefaults
      .get("dj-rest-auth/user/")
      .then(async (res) => {
        const results = await res.data;

        dispatch({ type: "UPDATE USER DATA", payload: results });

        AxiosDefaults.get(`profiles/${results.pk}/`)
          .then(async (res) => {
            const data = await res.data[0];

            dispatch({ type: "UPDATE PROFILE DATA", payload: data });
          })
          .catch((err) => {
            dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
          });
      })
      .catch((err) => {
        dispatch({ type: "ERROR UPDATING USER DATA", payload: err });
      });
  }, [dispatch]);
};

export default useRefreshToken;

// import { useEffect, useMemo } from "react";
// import axios from "axios";
// import { axiosReq, axiosRes } from "../API/axiosDefaults";
// import useAppContext from "./useAppContext";
//
// const useRefreshToken = () => {
//   const { dispatch } = useAppContext();
//
//   useEffect(() => {
//     const handleMount = async () => {
//       try {
//         return await axios.get("dj-rest-auth/user/");
//       } catch (err) {
//         dispatch({ type: "UPDATE USER DATA", payload: null });
//       }
//     };
//
//     handleMount()
//       .then((data) =>
//         data
//           ? dispatch({ type: "UPDATE USER DATA", payload: data.data })
//           : dispatch({ type: "UPDATE USER DATA", payload: null }),
//       )
//       .catch(() => dispatch({ type: "UPDATE USER DATA", payload: null }));
//   }, [dispatch]);
//
//   useMemo(() => {
//     axiosReq.interceptors.response.use(
//       async (config) => {
//         try {
//           await axios.post("/dj-rest-auth/token/refresh/");
//         } catch (err) {
//           return config;
//         }
//         return config;
//       },
//       (err) => {
//         return Promise.reject(err);
//       },
//     );
//
//     axiosRes.interceptors.response.use(
//       (response) => dispatch({ type: "UPDATE USER DATA", payload: response }),
//       async (err) => {
//         if (err.response?.status === 401) {
//           dispatch({ type: "UPDATE USER DATA", payload: null });
//         }
//         return Promise.reject(err);
//       },
//     );
//   }, [dispatch]);
// };
//
// export default useRefreshToken;
