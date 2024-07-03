import useAppContext from "../../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

import styles from "../../../styles/organism/Form.module.css";
import Form from "react-bootstrap/Form";
import { buttonClick, subheading } from "../../atom/elements";
import AxiosInstance from "../../../API/AxiosInstance";

const LogoutForm = () => {
  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  return (
    <Form className={styles.container}>
      <div className={styles.subheading}>
        {subheading("Are you sure that you want to Logout?")}
      </div>
      <div className={styles.buttons}>
        {buttonClick(
          async () => {
            await AxiosInstance.post("profiles/logout/")
              .then((res) => {
                const { message } = res.data;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({
                  type: "SHOW SUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
                dispatch({ type: "LOGOUT USER" });
                navigate("/");
              })
              .catch((err) => {
                const { message } = err;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({
                  type: "SHOW UNSUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
                dispatch({ type: "LOGOUT USER" });
                navigate("/");
              });
          },
          "Logout",
          "danger",
        )}
        {buttonClick(
          () => {
            dispatch({ type: "TOGGLE HIDE MODAL" });
          },
          "Cancel",
          "warning",
        )}
      </div>
    </Form>
  );
};

export default LogoutForm;
