// styling
import styles from "../../../styles/atom/elements.module.css";

/**
 * Atom is used to display thumbnail images
 * @param src
 * @param alt
 * @returns {JSX.Element}
 */
export const thumbnail = (src, alt) => (
  <img className={styles.thumbnail} src={src} alt={alt} />
);
