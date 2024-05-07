// styling
import styles from "../../../styles/atom/icons.module.css";

export const fontawesomeIcon = (iconClassName) => (
  <i className={`${iconClassName} ${styles.icons}`}></i>
);
