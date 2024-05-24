// styling
import styles from "../../../styles/atom/elements.module.css";

/**
 * Displaying of carousel images with animation
 * @param image - image to be displayed
 * @param resetAnimation - this is a flag that will reset animation on button click
 * @returns {JSX.Element}
 */
export const carouselImage = (image, resetAnimation) => (
  <img
    className={
      resetAnimation ? "" : `${styles.carouselImage} ${styles.animation}`
    }
    src={`${image}`}
    alt="carousel"
  />
);
