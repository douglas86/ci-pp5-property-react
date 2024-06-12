// 3rd party libraries
import { Modal } from "react-bootstrap";

// components
import FormOrganism from "./FormOrganism";
import { heading } from "../atom/elements";

import styles from "../../styles/organism/Modal.module.css";

const ModalOrganism = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {heading("Sign In")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormOrganism />
      </Modal.Body>
    </Modal>
  );
};

export default ModalOrganism;
