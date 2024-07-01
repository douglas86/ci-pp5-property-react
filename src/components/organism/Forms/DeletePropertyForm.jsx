import useAppContext from "../../../hooks/useAppContext";
import styles from "../../../styles/organism/Form.module.css";
import Form from "react-bootstrap/Form";
import { buttonClick, subheading } from "../../atom/elements";
import AxiosInstance from "../../../API/AxiosInstance";
import { useNavigate } from "react-router-dom";

const DeletePropertyForm = ({ id }) => {
  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  return (
    <>
      <Form className={styles.container}>
        <div className={styles.subheading}>
          {subheading("Are you sue that you want to delete this property?")}
        </div>
        <div className={styles.buttons}>
          {buttonClick(
            () =>
              AxiosInstance.post(`stocks/delete/${id}/`)
                .then((res) => {
                  const { message } = res.data;
                  dispatch({ type: "TOGGLE HIDE MODAL" });
                  dispatch({
                    type: "SHOW SUCCESSFULLY ALERT MESSAGE",
                    payload: message,
                  });
                  navigate("/dashboard/admin/properties");
                })
                .catch((err) => {
                  const { message } = err;
                  dispatch({ type: "TOGGLE HIDE MODAL" });
                  dispatch({
                    type: "SHOW UNSUCCESSFULLY ALERT MESSAGE",
                    payload: message,
                  });
                  navigate("/dashboard/admin/properties");
                }),
            "Delete",
            "danger",
          )}
          {buttonClick(
            () => console.log("Cancel was clicked"),
            "Cancel",
            "warning",
          )}
        </div>
      </Form>
    </>
  );
};

export default DeletePropertyForm;
