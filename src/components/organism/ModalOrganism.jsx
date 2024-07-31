import { Modal } from "react-bootstrap";

import { heading } from "../atom/elements";

import useAppContext from "../../hooks/useAppContext";

import styles from "../../styles/organism/Modal.module.css";

/**
 * Represents a modal organism component.
 *
 * @param {Object} props - The prop object containing the show and onHide properties.
 * @returns {React.Element} - The rendered modal component.
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
