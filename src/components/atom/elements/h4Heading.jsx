import styles from "../../../styles/atom/elements.module.css";

/**
 * Represents a function that creates a h4 heading element with a given title.
 *
 * @param {string} title - The title to display in the h4 heading element.
 * @returns {ReactElement} The h4 heading element with the specified title.
 */
export const h4Heading = (title) => <h4 className={styles.h4}>{title}</h4>;
