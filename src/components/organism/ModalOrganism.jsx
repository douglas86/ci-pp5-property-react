// 3rd party libraries
import { Modal } from "react-bootstrap";

// components
import FormOrganism from "./FormOrganism";
import { heading, subheading } from "../atom/elements";

import styles from "../../styles/organism/Modal.module.css";
import { signIn } from "../../utils/formContent/auth/signin";
import { useState } from "react";
import { signOut } from "../../utils/formContent/auth/signout";

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
        <FormOrganism form={signOut} />
      </Modal.Body>
    </Modal>
  );
};

export default ModalOrganism;
