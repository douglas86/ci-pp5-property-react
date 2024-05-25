// components
import { subheading } from "../atom/elements/subheading";

// assets
import avatar from "../../assets/images/avatar/Avatar.png";

// styling
import styles from "../../styles/molecule/Card.module.css";

const CardMolecule = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardSubheading}>
        {subheading('"A terrific praise"')}
      </div>
      <div className={styles.cardText}>
        <div className={styles.thumbnail}>
          <img src={`${avatar}`} alt="avatar" />
        </div>
        <div className={styles.description}>
          <h4>Douglas Maxton</h4>
        </div>
      </div>
    </div>
  );
};

export default CardMolecule;
