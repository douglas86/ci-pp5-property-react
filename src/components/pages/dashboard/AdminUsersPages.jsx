// components
import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";
import { heading } from "../../atom/elements";

// styling
import styles from "../../../styles/pages/admin.module.css";

const AdminUsersPages = () => {
  return (
    <div>
      <AdminButtonsMolecule />
      {heading("Registered Users")}
      <div className={styles.section}>
        <p>Name</p>
        <p className={styles.hidden}>address</p>
        <p className={styles.hidden}>Area Code</p>
        <p className={styles.hidden}>Role</p>
        <p>Rent</p>
      </div>
    </div>
  );
};

export default AdminUsersPages;
