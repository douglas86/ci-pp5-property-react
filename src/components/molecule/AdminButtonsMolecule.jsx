// 3rd party libraries
import { useNavigate } from "react-router-dom";

// components
import { buttonClick } from "../atom/elements";

// styling
import styles from "../../styles/molecule/AdminButtons.module.css";
import LoginForm from "../organism/Forms/LoginForm";
import useAppContext from "../../hooks/useAppContext";

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
