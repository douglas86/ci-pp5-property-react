// components
import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

// styling
import styles from "../../styles/templates/Layout.module.css";
import { Alert } from "react-bootstrap";
import useAppContext from "../../hooks/useAppContext";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  const { state } = useAppContext();
  const { dataReducers } = state;
  const { showAlert, showMessage } = dataReducers;

  return (
    <>
      <HeaderOrganism />
      <main className={styles.main}>
        {showAlert && <Alert variant="primary">{showMessage}</Alert>}
        {children}
      </main>
      {/*<FooterOrganism />*/}
    </>
  );
};

export default LayoutTemplate;
