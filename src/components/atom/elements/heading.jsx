import styles from "../../../styles/atom/elements.module.css";

/**
 * Render a heading with the given title.
 * @param {string} title - The title of the heading.
 * @returns {JSX.Element} The rendered heading component.
 */
export const heading = (title) => <h2 className={styles.h2}>{title}</h2>;
