// 3rd party libraries
import { useEffect } from "react";

// components
import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

// utilities
import { axiosRes } from "../../utils/axiosDefaults";

// custom hooks
import useAppContext from "../../hooks/useAppContext";
import useRefreshToken from "../../hooks/useRefreshToken";

// styling
import styles from "../../styles/templates/Layout.module.css";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  // state destructuring
  // const { dispatch } = useAppContext();

  // useEffect(() => {
  //   const handleMount = async () => {
  //     const { data } = await axiosRes.get("dj-rest-auth/user/");
  //     return data;
  //   };
  //
  //   handleMount()
  //     .then((data) => dispatch({ type: "UPDATE USER DATA", payload: data }))
  //     .catch((err) => {
  //       dispatch({ type: "USER DATA ERROR", payload: "None", error: err });
  //     });
  // }, [dispatch]);

  // refreshes the user data tokens
  // useRefreshToken();

  return (
    <>
      <HeaderOrganism />
      <main className={styles.main}>{children}</main>
      <FooterOrganism />
    </>
  );
};

export default LayoutTemplate;
