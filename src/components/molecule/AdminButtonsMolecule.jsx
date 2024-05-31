// components
import { buttonClick } from "../atom/elements";

import styles from "../../styles/molecule/AdminButtons.module.css";

const AdminButtonsMolecule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        <div className={styles.buttons}>
          {buttonClick(
            () => console.log("user button clicked"),
            "Users",
            "dark",
          )}
        </div>
        <div className={styles.buttons}>
          {buttonClick(
            () => console.log("property button clicked"),
            "Property",
            "dark",
          )}
        </div>
      </div>
      <div className={styles.sections}>
        <div className={styles.buttons}>
          {buttonClick(
            () => console.log("Add New Property"),
            "Add new Property",
            "success",
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminButtonsMolecule;
