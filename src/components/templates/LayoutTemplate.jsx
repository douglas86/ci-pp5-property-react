import { Alert } from "react-bootstrap";

import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

import { useAppState } from "../../hooks/useAppContext";

import styles from "../../styles/templates/Layout.module.css";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  const state = useAppState();
  const { dataReducers } = state;
  const { showAlert, showMessage, alertColor } = dataReducers;

  return (
    <>
      <HeaderOrganism />
      <main className={styles.main}>
        {showAlert && <Alert variant={alertColor}>{showMessage}</Alert>}
        {children}
      </main>
      <FooterOrganism />
    </>
  );
};

export default LayoutTemplate;
