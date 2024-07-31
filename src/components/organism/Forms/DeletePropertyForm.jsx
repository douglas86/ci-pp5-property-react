import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { buttonClick, subheading } from "../../atom/elements";

import useAppContext from "../../../hooks/useAppContext";
import AxiosInstance from "../../../API/AxiosInstance";

import styles from "../../../styles/organism/Form.module.css";

/**
 * DeletePropertyForm component displays a form for deleting a property.
 *
 * @param {Object} props - The prop object.
 * @param {string} props.id - The ID of the property to be deleted.
 *
 * @returns {JSX.Element} The rendered component.
 */
const DeletePropertyForm = ({ id }) => {
  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  return (
    <>
      <Form className={styles.container}>
        <div className={styles.subheading}>
          {subheading("Are you sure that you want to delete this property?")}
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
            () => {
              dispatch({ type: "TOGGLE HIDE MODAL" });
              navigate("dashboard/admin/users");
            },
            "Cancel",
            "warning",
          )}
        </div>
      </Form>
    </>
  );
};

export default DeletePropertyForm;
