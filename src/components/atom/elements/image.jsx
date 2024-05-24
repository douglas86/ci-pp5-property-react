import styles from "../../../styles/atom/elements.module.css";

export const image = (src, alt) => (
  <img className={styles.image} src={src} alt={alt} />
);
