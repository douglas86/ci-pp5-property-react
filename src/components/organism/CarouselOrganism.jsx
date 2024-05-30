// 3rd party packages
import { useEffect, useState } from "react";

// components
import { buttonClick, image } from "../atom/elements";

// assets
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

// styling
import styles from "../../styles/organism/Carousel.module.css";

/**
 * Organism used for running and displaying the carousel
 * @returns {JSX.Element}
 * @constructor
 */
const CarouselOrganism = () => {
  // state
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

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
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      time === 10
        ? setTime(0) || count === 9
          ? setCount(0)
          : setCount((prevCount) => prevCount + 1)
        : setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count, time]);

  const handleClick = (countValue) => {
    setTime(0);
    setCount(countValue);
  };

  return (
    <div className="carousel">
      <div className={styles.carousel}>
        {image(carouselImages[count], "carousel")}
      </div>
      <div className={styles.carouselBtn}>
        {buttonClick(
          () =>
            handleClick(count === 0 ? carouselImages.length - 1 : count - 1),
          "<",
          "dark",
        )}
        {buttonClick(
          () => handleClick(count === 9 ? 0 : count + 1),
          ">",
          "dark",
        )}
      </div>
    </div>
  );
};

export default CarouselOrganism;
