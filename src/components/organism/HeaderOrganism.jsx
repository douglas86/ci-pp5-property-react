// 3rd party libraries
import { useEffect } from "react";

// components
import LinksMolecule from "../molecule/LinksMolecule";
import MenuButtonMolecule from "../molecule/MenuButtonMolecule";

// context
import useAppContext from "../../hooks/useAppContext";

// assets
import logo from "../../assets/images/house.png";

// styling
import styles from "../../styles/organism/HeaderOrganism.module.css";

const HeaderOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { MenuOpen, width } = stateReducers;

  // set the MenuOpen to false if not on a mobile device,
  // this will update dynamically
  useEffect(() => {
    width >= 768 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <>
      <div className={styles.navbar}>
        <img className={styles.logo} src={`${logo}`} alt="logo" />
        <h1 className={styles.title}>London Properties</h1>
        {width > 768 ? <LinksMolecule /> : <MenuButtonMolecule />}
      </div>
      {MenuOpen && <h1>Show</h1>}
    </>
  );
};

export default HeaderOrganism;
