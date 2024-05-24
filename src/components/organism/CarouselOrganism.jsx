// 3rd party libraries
import { useEffect, useState } from "react";

// components
import { buttonClick, carouselImage } from "../atom/elements";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

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
import eleven from "../../assets/images/carousel/eleven.jpg";

// styling
import styles from "../../styles/organism/Carousel.module.css";

/**
 * Carousel component used to display and animate the carousel
 * @returns {JSX.Element}
 * @constructor
 */
const CarouselOrganism = () => {
  // state store
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { timer, carouselIndex, width } = stateReducers;

  const [resetAnimation, setResetAnimation] = useState(false);

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

  useEffect(() => {
    // change carousel image on timer, when timer is at 8 seconds
    const handleChange = () => {
      carouselIndex === carouselImages.length - 1
        ? dispatch({ type: "CHANGE CAROUSEL INDEX", payload: 0 })
        : dispatch({
            type: "CHANGE CAROUSEL INDEX",
            payload: carouselIndex + 1,
          });
    };

    // logic to change the image on timer
    timer === 8 && handleChange();

    // change the timer value every 1 second
    const time = setInterval(() => {
      dispatch({ type: "COUNT TIMER SECONDS", payload: timer + 1 });
    }, 1000);

    // reset an animation flag to false when it becomes true
    if (resetAnimation) {
      setResetAnimation(false);
    }

    return () => clearInterval(time);
  }, [timer, dispatch, resetAnimation]);

  // reset animation on button click
  const handleClick = (index) => {
    setResetAnimation(true); // change animation flag to true to reset keyframes
    dispatch({ type: "COUNT TIMER SECONDS", payload: 0 }); // reset timer to zero
    dispatch({ type: "CHANGE CAROUSEL INDEX", payload: index }); // change carousel image on index number
  };

  return (
    <div className={styles.container}>
      {width > 768 ? (
        <>
          <div className={styles.carousel}>
            {carouselImage(carouselImages[carouselIndex], resetAnimation)}
          </div>
          <div className={styles.carouselBtn}>
            {carouselImages.map((item, index) => (
              <div key={index}>
                {buttonClick(
                  () => handleClick(index),
                  "",
                  index === carouselIndex ? "primary" : "dark", // change the color of the button based on index number
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <img
            className={styles.image}
            src={`${carouselImages[carouselIndex]}`}
            alt="carousel"
          />
        </>
      )}
    </div>
  );
};

export default CarouselOrganism;
