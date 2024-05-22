import { buttonClick } from "../atom/elements";

import styles from "../../styles/molecule/Title.module.css";

const PageTitleMolecule = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>London Properties</h1>
      <p className={styles.p}>Welcome to the best property site in London</p>
      {buttonClick(() => console.log("clicked"), "Search Properties", "dark")}
    </div>
  );
};

export default PageTitleMolecule;
