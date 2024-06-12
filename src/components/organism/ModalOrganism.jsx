import { Modal } from "react-bootstrap";
import { heading, subheading } from "../atom/elements";

const ModalOrganism = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {heading("Sign In")}
      {subheading("If you have not registered yet please click here?")}
    </Modal>
  );
};

export default ModalOrganism;
