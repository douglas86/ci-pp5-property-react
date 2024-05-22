import one from "../../assets/images/carousel/one.jpg";
import two from "../../assets/images/carousel/two.jpg";
import three from "../../assets/images/carousel/three.jpg";
import four from "../../assets/images/carousel/four.jpg";
import five from "../../assets/images/carousel/five.jpg";
import six from "../../assets/images/carousel/six.jpeg";
import seven from "../../assets/images/carousel/seven.jpg";
import eight from "../../assets/images/carousel/eight.jpg";
import nine from "../../assets/images/carousel/nine.png";
import ten from "../../assets/images/carousel/ten.png";
import eleven from "../../assets/images/carousel/eleven.jpg";

// styling
import styles from "../../styles/organism/Carousel.module.css";
import { useEffect, useState } from "react";

const CarouselOrganism = () => {
  const carouselImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    ten,
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselIndex === carouselImages.length - 1) {
        setCarouselIndex(0);
      } else {
        setCarouselIndex((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [carouselIndex]);

  console.log("carouselIndex", carouselIndex);

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={`${carouselImages[carouselIndex]}`}
        alt="carousel"
      />
    </div>
  );
};

export default CarouselOrganism;
