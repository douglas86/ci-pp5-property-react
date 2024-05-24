import styles from "../../../styles/atom/elements.module.css";

export const carouselImage = (image, resetAnimation) => (
  <img
    className={resetAnimation ? "" : `${styles.image} ${styles.animation}`}
    src={`${image}`}
    alt="carousel"
  />
);
