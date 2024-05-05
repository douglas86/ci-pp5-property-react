// components
import HeaderTemplate from "./HeaderTemplate";
import FooterTemplate from "./FooterTemplate";

// styling
import styles from "../../styles/LayoutTemplate.module.css";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  return (
    <div className={styles.body}>
      <HeaderTemplate />
      <main>{children}</main>
      <FooterTemplate />
    </div>
  );
};

export default LayoutTemplate;
