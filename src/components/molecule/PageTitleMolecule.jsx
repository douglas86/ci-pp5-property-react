import { title, subheading } from "../atom/elements";

import styles from "../../styles/molecule/Title.module.css";

/**
 * Represents a molecule component for the page title.
 * @returns {JSX.Element} The rendered page title molecule component.
 */
const PageTitleMolecule = () => {
  return (
    <div className={styles.container}>
      {title}
      {subheading("Welcome to the best property site in London")}
    </div>
  );
};

export default PageTitleMolecule;
