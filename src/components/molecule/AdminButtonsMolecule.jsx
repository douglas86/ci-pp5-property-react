import { useNavigate } from "react-router-dom";

import { buttonClick } from "../atom/elements";
import LoginForm from "../organism/Forms/LoginForm";

import useAppContext from "../../hooks/useAppContext";

import styles from "../../styles/molecule/AdminButtons.module.css";

/**
 * Component representing admin buttons molecule.
 * This molecule is used to display admin buttons for navigating between different admin pages.
 *
 * @function AdminButtonsMolecule
 * @returns {JSX.Element} - The rendered component
 */
const AdminButtonsMolecule = () => {
  const { dispatch } = useAppContext();

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
            () => {
              navigate("/dashboard/admin/add-new-property");
              dispatch({ type: "LOAD MODAL HEADER", payload: "Login Form" });
              dispatch({ type: "LOAD FORM COMPONENT", payload: <LoginForm /> });
            },
            "Add new Property",
            "success",
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminButtonsMolecule;
