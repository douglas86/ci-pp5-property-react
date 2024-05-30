import styles from "../../../styles/atom/elements.module.css";

export const thumbnail = (src, alt) => (
  <img className={styles.thumbnail} src={src} alt={alt} />
);
