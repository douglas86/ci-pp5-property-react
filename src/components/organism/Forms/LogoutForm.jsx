import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";

import { buttonClick, subheading } from "../../atom/elements";

import useAppContext from "../../../hooks/useAppContext";
import AxiosInstance from "../../../API/AxiosInstance";

import styles from "../../../styles/organism/Form.module.css";

/**
 * Represents a Logout Form component.
 *
 * @returns {JSX.Element} The rendered Logout Form component.
 */
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
                Cookies.remove("refresh-token");
                Cookies.remove("auth-token");
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
