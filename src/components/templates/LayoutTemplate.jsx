// components
import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

// styling
import styles from "../../styles/templates/LayoutTemplate.module.css";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  return (
    <div className={styles.body}>
      <HeaderOrganism />
      <main>{children}</main>
      <FooterOrganism />
    </div>
  );
};

export default LayoutTemplate;
