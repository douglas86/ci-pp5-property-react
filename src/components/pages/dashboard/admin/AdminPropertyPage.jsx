// components
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading } from "../../../atom/elements";
import IsAdmin from "../../../templates/Authentication/IsAdmin";

// styling
import styles from "../../../../styles/pages/admin.module.css";
import { useEffect, useState } from "react";
import useResize from "../../../../hooks/useResize";
import AxiosInstance from "../../../../API/AxiosInstance";

const AdminPropertyPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [body, setBody] = useState(null);

  const width = useResize();

  const headers = ["", "Property Owner", "Address", "Postcode", "Role", "Rent"];

  useEffect(() => {
    AxiosInstance.get("stocks/")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

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
