// 3rd party libraries
import { useNavigate } from "react-router-dom";

// components
import { buttonClick } from "../atom/elements";

// styling
import styles from "../../styles/molecule/AdminButtons.module.css";

const AdminButtonsMolecule = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        <div className={styles.buttons}>
          {buttonClick(
            () => navigate("/dashboard/admin/users"),
            "Users",
            "dark",
          )}
        </div>
        <div className={styles.buttons}>
          {buttonClick(
            () => navigate("/dashboard/admin/properties"),
            "Property",
            "dark",
          )}
        </div>
      </div>
      <div className={styles.sections}>
        <div className={styles.buttons}>
          {buttonClick(
            () => navigate("/dashboard/admin/add-new-property"),
            "Add new Property",
            "success",
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminButtonsMolecule;
