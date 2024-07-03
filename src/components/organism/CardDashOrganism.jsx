import { Card } from "react-bootstrap";

import ModalTemplate from "../templates/ModalTemplate";
import ModalOrganism from "./ModalOrganism";
import { buttonClick, spinner, subheading, thumbnail } from "../atom/elements";

import useAppContext from "../../hooks/useAppContext";

import styles from "../../styles/organism/CardDash.module.css";

const CardDashOrganism = ({ body, modalType, DeleteComponent }) => {
  const { state, dispatch } = useAppContext();
  const { modalReducers } = state;
  const { showModal, templateModal } = modalReducers;

  const handleButtons = (items) => {
    return (
      <>
        {DeleteComponent ? (
          <div className={styles.links}>
            {buttonClick(
              () => {
                dispatch({
                  type: "LOAD MODAL HEADER",
                  payload: `Do you wish to Delete ${modalType}?`,
                });
                dispatch({
                  type: "LOAD FORM COMPONENT",
                  payload: <DeleteComponent id={items.id} />,
                });
              },
              "Delete",
              "outline-danger",
            )}
          </div>
        ) : null}
        <ModalTemplate
          show={templateModal}
          onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
        />
      </>
    );
  };

  return (
    <>
      {body ? (
        <div className={styles.div}>
          {Object.values(body).map((items, index) => (
            <Card
              style={{ width: "15rem" }}
              key={index}
              className={styles.card}
            >
              <Card.Body>
                <Card.Title>
                  {thumbnail(`${items.image}`, "profile")} {items.name}
                </Card.Title>
                {items.role ? <Card.Text>Role: {items.role}</Card.Text> : null}
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
                {items.role === "user"
                  ? handleButtons(items)
                  : modalType !== "Users"
                    ? handleButtons(items)
                    : subheading("You can not delete the admin?")}
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
