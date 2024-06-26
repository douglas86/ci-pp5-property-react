// components
import { buttonClick } from "../atom/elements";
import { title } from "../atom/elements";
import { subheading } from "../atom/elements";

// styling
import styles from "../../styles/molecule/Title.module.css";

const PageTitleMolecule = () => {
  return (
    <div className={styles.container}>
      {title}
      {subheading("Welcome to the best property site in London")}
      {buttonClick(() => console.log("clicked"), "Search Properties", "dark")}
    </div>
  );
};

export default PageTitleMolecule;
