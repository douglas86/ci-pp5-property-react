// 3rd party libraries
import { useEffect } from "react";

// components
import LinksMolecule from "../molecule/LinksMolecule";
import MenuMolecule from "../molecule/MenuMolecule";

// context
import useAppContext from "../../hooks/useAppContext";

// assets
import logo from "../../assets/images/house.png";

// styling
import styles from "../../styles/organism/HeaderOrganism.module.css";

const HeaderOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { width } = stateReducers;

  // set the MenuOpen to false if not on a mobile device,
  // this will update dynamically
  useEffect(() => {
    width >= 1024 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <>
      {width > 1024 ? (
        <div className={styles.navbar}>
          <img className={styles.logo} src={`${logo}`} alt="logo" />
          <h1 className={styles.title}>London Properties</h1>
          <LinksMolecule />
        </div>
      ) : (
        <MenuMolecule />
      )}
    </>
  );
};

export default HeaderOrganism;
