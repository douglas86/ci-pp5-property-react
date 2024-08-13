import styles from "../../../styles/atom/displayErrors.module.css";

/**
 * Displays a formatted p element tag of the error to be displayed
 * @param {string} err - The text to be displayed
 * @returns {JSX.Element}
 */
export const error = (err) => <p className={styles.p}>{err}</p>;
