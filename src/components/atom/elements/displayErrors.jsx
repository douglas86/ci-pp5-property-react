import styles from "../../../styles/atom/displayErrors.module.css";

export const displayErrors = (errors, name) => (
  <>
    {errors !== undefined &&
      Object.entries(errors).map(([key, value], index) => (
        <div key={index}>
          {key === name && <p className={styles.p}>{value}</p>}
        </div>
      ))}
  </>
);
