// 3rd party libraries
import { useEffect } from "react";

// components
import LinksMolecule from "../molecule/LinksMolecule";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// assets
import logo from "../../assets/images/house.png";

// styling
import styles from "../../styles/organism/HeaderOrganism.module.css";

const HeaderOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { width } = stateReducers;

  useEffect(() => {
    width >= 768 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={`${logo}`} alt="logo" className={styles.image} />
      </div>
      <div className={styles.title}>
        <h1>London Properties</h1>
      </div>
      <div className={styles.menu}>
        {width > 768 ? <LinksMolecule /> : <p>Show</p>}
      </div>
    </header>
  );
};

export default HeaderOrganism;

// // 3rd party libraries
// import { useEffect } from "react";
//
// // components
// import LinksMolecule from "../molecule/LinksMolecule";
// import ButtonMenuMolecule from "../molecule/ButtonMenuMolecule";
//
// // context
// import useAppContext from "../../hooks/useAppContext";
//
// // assets
// import logo from "../../assets/images/house.png";
//
// // styling
// import styles from "../../styles/organism/HeaderOrganism.module.css";
// import ShowMenuMolecule from "../molecule/ShowMenuMolecule";
//
// const HeaderOrganism = () => {
//   const { state, dispatch } = useAppContext();
//   const { stateReducers } = state;
//   const { MenuOpen, width } = stateReducers;
//
//   // set the MenuOpen to false if not on a mobile device,
//   // this will update dynamically
//   useEffect(() => {
//     width >= 768 &&
//       dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
//   }, [width, dispatch]);
//
//   return (
//     <>
//       <div className={styles.navbar}>
//         <img className={styles.logo} src={`${logo}`} alt="logo" />
//         <h1 className={styles.title}>London Properties</h1>
//         {width > 768 ? <LinksMolecule /> : <ButtonMenuMolecule />}
//       </div>
//       {MenuOpen && <ShowMenuMolecule />}
//     </>
//   );
// };
//
// export default HeaderOrganism;
