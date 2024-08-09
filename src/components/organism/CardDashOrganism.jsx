import { Card } from "react-bootstrap";

import ModalOrganism from "./ModalOrganism";
import { buttonClick, spinner, subheading, thumbnail } from "../atom/elements";

import { useAppDispatch, useAppState } from "../../hooks/useAppContext";

import styles from "../../styles/organism/CardDash.module.css";

/**
 * Render the CardDashOrganism component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.body - The body object containing data for each card.
 * @param {string} props.modalType - The type of modal.
 * @param {React.Component} props.DeleteComponent - The component to be rendered when delete button is clicked.
 *
 * @returns {JSX.Element} The rendered CardDashOrganism component.
 */
const CardDashOrganism = ({ body, modalType, DeleteComponent }) => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const { modalReducers } = state;
  const { templateModal } = modalReducers;

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
        <ModalOrganism
          show={templateModal}
          onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
        />
      </>
    );
  };

  return (
    <>
      {body.length !== 0 ? (
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
    </>
  );
};

export default CardDashOrganism;
