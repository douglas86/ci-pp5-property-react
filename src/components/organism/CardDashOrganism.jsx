import { Card } from "react-bootstrap";
import { buttonClick, spinner, thumbnail } from "../atom/elements";

import styles from "../../styles/organism/CardDash.module.css";
import useAppContext from "../../hooks/useAppContext";
import ModalOrganism from "./ModalOrganism";

const CardDashOrganism = ({ body }) => {
  const { state, dispatch } = useAppContext();
  const { modalReducers } = state;
  const { showModal } = modalReducers;

  return (
    <>
      {body ? (
        <div className={styles.div}>
          {body.map((items, index) => (
            <Card
              style={{ width: "15rem" }}
              key={index}
              className={styles.card}
            >
              <Card.Body>
                <Card.Title>
                  {thumbnail(`${items.image}`, "profile")} {items.name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Role: {items.role}
                </Card.Subtitle>
                {items.address ? (
                  <Card.Text className="text-muted">
                    Address: {items.address}
                  </Card.Text>
                ) : null}
                {items.area ? (
                  <Card.Text className="text-muted">
                    Area: {items.area}
                  </Card.Text>
                ) : null}
                {items.postcode ? (
                  <Card.Text className="text-muted">
                    Postcode: {items.postcode}
                  </Card.Text>
                ) : null}
                {items.rent ? (
                  <Card.Text className="text-muted">
                    Rent: £ {items.rent}
                  </Card.Text>
                ) : null}
                <div className={styles.links}>
                  <Card.Link className={`${styles.a} ${styles.view}`}>
                    Info
                  </Card.Link>
                  <Card.Link className={`${styles.a} ${styles.update}`}>
                    Update
                  </Card.Link>
                  <Card.Link className={`${styles.a} ${styles.delete}`}>
                    Delete
                  </Card.Link>
                  {buttonClick(
                    () => {
                      dispatch({ type: "DELETE PROPERTY", payload: items.id });
                      dispatch({ type: "TOGGLE SHOW MODAL" });
                    },
                    "Delete",
                    "outline-danger",
                  )}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        spinner()
      )}
      <ModalOrganism
        show={showModal}
        onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
        auth={false}
      />
    </>
  );
};

export default CardDashOrganism;
