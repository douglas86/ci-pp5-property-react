// 3rd party libraries
import { Alert } from "react-bootstrap";

// components
import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

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
  const { state } = useAppContext();
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
