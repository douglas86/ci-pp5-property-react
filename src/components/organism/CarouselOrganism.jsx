import images from "../../assets/images/carousel/images.jpeg";

// styling
import styles from "../../styles/organism/Carousel.module.css";

const CarouselOrganism = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={`${images}`} alt="carousel" />
    </div>
  );
};

export default CarouselOrganism;
