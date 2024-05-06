// styling
import styles from "../../../styles/atom/icons.module.css";

export const assetIcon = (icon) => (
  <img src={icon} alt={icon} className={styles.icons} />
);
