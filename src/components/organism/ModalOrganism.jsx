// 3rd party libraries
import { Modal } from "react-bootstrap";

// components
import FormOrganism from "./FormOrganism";
import { heading } from "../atom/elements";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/organism/Modal.module.css";

const ModalOrganism = (props) => {
  const { state } = useAppContext();
  const { formsReducers } = state;
  const { form } = formsReducers;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {form && heading(form.buttonText)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormOrganism auth />
      </Modal.Body>
    </Modal>
  );
};

export default ModalOrganism;
