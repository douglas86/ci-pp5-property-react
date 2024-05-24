import styles from "../../styles/molecule/Card.module.css";
import { subheading } from "../atom/elements/subheading";

const CardMolecule = () => {
  return <div className={styles.card}>{subheading('"A terrific praise"')}</div>;
};

export default CardMolecule;
