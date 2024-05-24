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

const CarouselOrganism = () => {
  // state store
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { timer, carouselIndex } = stateReducers;

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

  // console.log("carouselIndex", carouselIndex);

  useEffect(() => {
    const handleChange = () => {
      carouselIndex === carouselImages.length - 1
        ? dispatch({ type: "CHANGE CAROUSEL INDEX", payload: 0 })
        : dispatch({
            type: "CHANGE CAROUSEL INDEX",
            payload: carouselIndex + 1,
          });
    };

    timer === 8 && handleChange();

    const time = setInterval(() => {
      dispatch({ type: "COUNT TIMER SECONDS", payload: timer + 1 });
    }, 1000);

    if (resetAnimation) {
      setResetAnimation(false);
    }

    return () => clearInterval(time);
  }, [timer, dispatch, resetAnimation]);

  // console.log("timer", timer);

  const handleClick = (index) => {
    setResetAnimation(true);
    dispatch({ type: "COUNT TIMER SECONDS", payload: 0 });
    dispatch({ type: "CHANGE CAROUSEL INDEX", payload: index });
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {carouselImage(carouselImages[carouselIndex], resetAnimation)}
      </div>
      <div className={styles.carouselBtn}>
        {carouselImages.map((item, index) => (
          <div key={index}>
            {buttonClick(
              () => handleClick(index),
              "",
              index === carouselIndex ? "primary" : "dark",
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselOrganism;
