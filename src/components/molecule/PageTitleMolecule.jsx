// components
import { buttonClick } from "../atom/elements";
import { heading } from "../atom/elements/heading";
import { subheading } from "../atom/elements/subheading";

// styling
import styles from "../../styles/molecule/Title.module.css";

const PageTitleMolecule = () => {
  return (
    <div className={styles.container}>
      {heading}
      {subheading}
      {buttonClick(() => console.log("clicked"), "Search Properties", "dark")}
    </div>
  );
};

export default PageTitleMolecule;
