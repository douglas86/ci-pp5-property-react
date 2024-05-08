// styling
import styles from "../../../styles/atom/icons.module.css";

export const logoIcon = (icon) => (
  <img src={icon} alt={icon} className={styles.logo} />
);
