// components
import { heading, subheading } from "../atom/elements";

// styling
import styles from "../../styles/molecule/Statement.module.css";

/**
 * This molecule is used for making statements like about, mission or commitment statements
 * @param title - title of the statement
 * @param subHead - optional description of statement
 * @param paragraph - this is the paragraph of the statement
 * @returns {JSX.Element}
 * @constructor
 */
const StatementMolecule = ({ title, subHead, paragraph }) => {
  return (
    <div className={styles.section}>
      {heading(title)}
      {subHead && subheading(subHead)}
      <p>{paragraph}</p>
    </div>
  );
};

export default StatementMolecule;
