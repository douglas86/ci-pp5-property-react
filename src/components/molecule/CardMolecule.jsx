import { subheading } from "../atom/elements";

import avatar from "../../assets/images/avatar/Avatar.png";

import styles from "../../styles/molecule/Card.module.css";

/**
 * CardMolecule is a React component that renders a card deck with multiple cards.
 * Each card contains a subheading, avatar, and name.
 */
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
            <h4>{item.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMolecule;
