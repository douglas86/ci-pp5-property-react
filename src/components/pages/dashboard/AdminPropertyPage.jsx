// components
import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";
import { heading } from "../../atom/elements";

// styling
import styles from "../../../styles/pages/admin.module.css";

const AdminPropertyPage = () => {
  return (
    <div>
      <AdminButtonsMolecule />
      {heading("Properties")}
      <div className={styles.section}>
        <p>address</p>
        <p className={styles.hidden}>area</p>
        <p className={styles.hidden}>area code</p>
        <p>Rent</p>
      </div>
    </div>
  );
};

export default AdminPropertyPage;
