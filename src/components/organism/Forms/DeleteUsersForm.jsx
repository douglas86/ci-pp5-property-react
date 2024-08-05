import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { buttonClick, subheading } from "../../atom/elements";

import { useAppDispatch } from "../../../hooks/useAppContext";
import AxiosInstance from "../../../API/AxiosInstance";

import styles from "../../../styles/organism/Form.module.css";

/**
 * DeleteUsersForm component deletes a user when confirmed and cancels the deletion when canceled.
 *
 * @param {Object} props - The props object containing the following property:
 *   - id: The ID of the user to be deleted.
 *
 * @returns {JSX.Element} The DeleteUsersForm component.
 */
const DeleteUsersForm = ({ id }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <Form className={styles.container}>
      <div className={styles.subheading}>
        {subheading("Are you sure that you want to delete this User?")}
      </div>
      <div className={styles.buttons}>
        {buttonClick(
          () => {
            AxiosInstance.delete(`profiles/delete/${id}/`)
              .then((res) => {
                const { message } = res.data;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({
                  type: "SHOW SUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
                navigate("/dashboard/admin/users/");
              })
              .catch((err) => {
                const { message } = err;
                dispatch({ type: "TOGGLE HIDE MODAL" });
                dispatch({
                  type: "SHOW UNSUCCESSFULLY ALERT MESSAGE",
                  payload: message,
                });
                navigate("/dashboard/admin/users/");
              });
          },
          "Delete",
          "danger",
        )}
        {buttonClick(
          () => {
            dispatch({ type: "TOGGLE HIDE MODAL" });
            navigate("/dashboard/admin/users/");
          },
          "Cancel",
          "warning",
        )}
      </div>
    </Form>
  );
};

export default DeleteUsersForm;
