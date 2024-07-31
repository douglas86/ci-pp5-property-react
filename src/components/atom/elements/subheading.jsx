import styles from "../../../styles/atom/elements.module.css";

/**
 * Create a subheading component.
 *
 * @param {string} heading - The text content of the subheading.
 * @returns {ReactElement} The JSX element representing the subheading.
 */
export const subheading = (heading) => <p className={styles.p}>{heading}</p>;
