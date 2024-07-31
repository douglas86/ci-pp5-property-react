import styles from "../../../styles/atom/elements.module.css";

/**
 * Represents an image element with a source and alternate text.
 *
 * @param {string} src - The URL of the image source.
 * @param {string} alt - The alternate text for the image.
 * @returns {JSX.Element} - The image element.
 */
export const image = (src, alt) => (
  <img className={styles.image} src={src} alt={alt} />
);
