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
import eleven from "../../assets/images/carousel/eleven.jpg";

// styling
import styles from "../../styles/organism/Carousel.module.css";

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
    eleven,
    ten,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      time === 10
        ? setTime(0) || count === 10
          ? setCount(0)
          : setCount((prevCount) => prevCount + 1)
        : setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count, time]);

  const handleClick = (countValue) => {
    setTime(0);
    setCount(countValue);
    console.log("countValue", countValue);
  };

  console.log("counter", count);
  console.log("time", time);

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
          () => handleClick(count === 10 ? 0 : count + 1),
          ">",
          "dark",
        )}
      </div>
    </div>
  );
};

export default CarouselOrganism;

// // 3rd party libraries
// import { useEffect, useState } from "react";
//
// // components
// import { buttonClick, carouselImage, image } from "../atom/elements";
//
// // custom hooks
// import useAppContext from "../../hooks/useAppContext";
//
// // assets
// import one from "../../assets/images/carousel/one.jpg";
// import two from "../../assets/images/carousel/two.jpg";
// import three from "../../assets/images/carousel/three.jpg";
// import four from "../../assets/images/carousel/four.jpg";
// import five from "../../assets/images/carousel/five.jpg";
// import six from "../../assets/images/carousel/six.jpeg";
// import seven from "../../assets/images/carousel/seven.jpg";
// import eight from "../../assets/images/carousel/eight.jpg";
// import nine from "../../assets/images/carousel/nine.png";
// import ten from "../../assets/images/carousel/ten.png";
// import eleven from "../../assets/images/carousel/eleven.jpg";
//
// // styling
// import styles from "../../styles/organism/Carousel.module.css";
//
// /**
//  * Carousel component used to display and animate the carousel
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const CarouselOrganism = () => {
//   // state store
//   const { state, dispatch } = useAppContext();
//   const { stateReducers } = state;
//   const { timer, carouselIndex, width } = stateReducers;
//
//   const [resetAnimation, setResetAnimation] = useState(false);
//
//   const carouselImages = [
//     one,
//     two,
//     three,
//     four,
//     five,
//     six,
//     seven,
//     eight,
//     nine,
//     ten,
//     eleven,
//     ten,
//   ];
//
//   // reset animation on button click
//   const handleClick = (index) => {
//     setResetAnimation(true); // change animation flag to true to reset keyframes
//     dispatch({ type: "COUNT TIMER SECONDS", payload: 0 }); // reset timer to zero
//     dispatch({ type: "CHANGE CAROUSEL INDEX", payload: index }); // change carousel image on index number
//   };
//
//   useEffect(() => {
//     // change carousel image on timer, when timer is at 8 seconds
//     const handleChange = () => {
//       carouselIndex === carouselImages.length - 1
//         ? dispatch({ type: "CHANGE CAROUSEL INDEX", payload: 0 })
//         : dispatch({
//             type: "CHANGE CAROUSEL INDEX",
//             payload: carouselIndex + 1,
//           });
//     };
//
//     // logic to change the image on timer
//     timer === 8 && handleChange();
//
//     width === 768 && handleClick(carouselIndex);
//
//     // change the timer value every 1 second
//     const time = setInterval(() => {
//       dispatch({ type: "COUNT TIMER SECONDS", payload: timer + 1 });
//     }, 1000);
//
//     // reset an animation flag to false when it becomes true
//     if (resetAnimation) {
//       setResetAnimation(false);
//     }
//
//     return () => clearInterval(time);
//   }, [timer, dispatch, resetAnimation, width]);
//
//   return (
//     <div className={styles.container}>
//       {width >= 768 ? (
//         <>
//           <div className={styles.carousel}>
//             {carouselImage(carouselImages[carouselIndex], resetAnimation)}
//           </div>
//           <div className={styles.carouselBtn}>
//             {carouselImages.map((item, index) => (
//               <div key={index}>
//                 {buttonClick(
//                   () => handleClick(index),
//                   "",
//                   index === carouselIndex ? "primary" : "dark", // change the color of the button based on index number
//                 )}
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//           <div className={styles.carousel}>
//             {image(carouselImages[carouselIndex], "carousel")}
//           </div>
//           <div className={styles.carouselBtn}>
//             {buttonClick(
//               () =>
//                 handleClick(
//                   carouselIndex === 0
//                     ? carouselImages.length - 1
//                     : carouselIndex - 1,
//                 ),
//               "<",
//               "dark",
//             )}
//             {buttonClick(
//               () => handleClick(carouselIndex === 10 ? 0 : carouselIndex + 1),
//               ">",
//               "dark",
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
//
// export default CarouselOrganism;
