// 3rd party libraries
import { useEffect } from "react";

// components
import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

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
  return (
    <>
      <HeaderOrganism />
      <main className={styles.main}>{children}</main>
      <FooterOrganism />
    </>
  );
};

export default LayoutTemplate;
