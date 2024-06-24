// components
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading } from "../../../atom/elements";

// styling
import styles from "../../../../styles/pages/admin.module.css";
import IsAdmin from "../../../templates/Authentication/IsAdmin";

const AdminUsersPages = () => {
  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Registered Users")}
      <div className={styles.section}>
        <p>Name</p>
        <p className={styles.hidden}>address</p>
        <p className={styles.hidden}>Area Code</p>
        <p className={styles.hidden}>Role</p>
        <p>Rent</p>
      </div>
    </IsAdmin>
  );
};

export default AdminUsersPages;
