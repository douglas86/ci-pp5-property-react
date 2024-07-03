import { Modal } from "react-bootstrap";
import { heading } from "../atom/elements";
import styles from "../../styles/organism/Modal.module.css";
import useAppContext from "../../hooks/useAppContext";

/*
Template that will be used for displaying the modal
 */
const ModalOrganism = ({ show, onHide }) => {
  const { state } = useAppContext();
  const { modalReducers } = state;
  const { formComponent, modalHeader } = modalReducers;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.header} closeButton>
        {modalHeader && heading(modalHeader)}
      </Modal.Header>
      <Modal.Body>{formComponent}</Modal.Body>
    </Modal>
  );
};

export default ModalOrganism;
