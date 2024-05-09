// 3rd party libraries
import axios from "axios";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// components
import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

// utilities
import { axiosReq, axiosRes } from "../../utils/axiosDefaults";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/templates/Layout.module.css";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  // declare variables
  const history = useNavigate();

  // state destructuring
  const { state, dispatch } = useAppContext();
  const { userReducers } = state;

  useEffect(() => {
    const handleMount = async () => {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      return data;
    };

    handleMount()
      .then((data) => dispatch({ type: "UPDATE USER DATA", payload: data }))
      .catch((err) => {
        dispatch({ type: "USER DATA ERROR", payload: "None", error: err });
      });
  }, [dispatch]);

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

  return (
    <>
      <HeaderOrganism />
      <main className={styles.main}>{children}</main>
      <FooterOrganism />
    </>
  );
};

export default LayoutTemplate;
