// components
import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";
import { heading } from "../../atom/elements";
import IsAdmin from "../../templates/Authentication/IsAdmin";

// styling
import styles from "../../../styles/pages/admin.module.css";

const AdminPropertyPage = () => {
  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Properties")}
      <div className={styles.section}>
        <p>address</p>
        <p className={styles.hidden}>area</p>
        <p className={styles.hidden}>area code</p>
        <p>Rent</p>
      </div>
    </IsAdmin>
  );
};

export default AdminPropertyPage;
