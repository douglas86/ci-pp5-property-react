import { heading } from "../atom/elements";

import styles from "../../styles/molecule/Statement.module.css";
import { subheading } from "../atom/elements/subheading";

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
