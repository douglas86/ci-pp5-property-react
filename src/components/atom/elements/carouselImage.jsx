import styles from "../../../styles/atom/elements.module.css";

export const carouselImage = (image) => (
  <img className={styles.image} src={`${image}`} alt="carousel" />
);
