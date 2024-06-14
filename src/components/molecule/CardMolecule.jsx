// components
import { subheading } from "../atom/elements";

// assets
import avatar from "../../assets/images/avatar/Avatar.png";

// styling
import styles from "../../styles/molecule/Card.module.css";

const CardMolecule = () => {
  const data = [
    {
      subheading: "A terrific praise",
      avatar: avatar,
      name: "Douglas Maxton",
    },
    {
      subheading: "A terrific praise",
      avatar: avatar,
      name: "Douglas Maxton",
    },
    {
      subheading: "A terrific praise",
      avatar: avatar,
      name: "Douglas Maxton",
    },
  ];

  return (
    <div className={styles.cardDeck}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardSubheading}>
            {subheading(`"${item.subheading}"`)}
          </div>
          <div className={styles.cardText}>
            <div className={styles.thumbnail}>
              <img src={`${item.avatar}`} alt="avatar" />
            </div>
            <div className={styles.description}>
              <h4>{item.name}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMolecule;
