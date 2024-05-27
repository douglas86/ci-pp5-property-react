// components
import { heading, subheading } from "../atom/elements";

// styling
import styles from "../../styles/molecule/Statement.module.css";

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
