import { Card } from "react-bootstrap";
import { spinner, thumbnail } from "../atom/elements";

import styles from "../../styles/organism/CardDash.module.css";

const CardDashOrganism = ({ body }) => {
  console.log("body", body);
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
                </div>
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
