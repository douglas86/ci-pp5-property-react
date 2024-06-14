// 3rd party libraries
import { useEffect } from "react";

// components
import LinksOrganism from "./LinksOrganism";
import MenuMolecule from "../molecule/MenuMolecule";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// assets
import logo from "../../assets/images/header/Property.png";

// styles
import styles from "../../styles/organism/HeaderOrganism.module.css";

/**
 * This is a higher order component that is responsible for the header
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderOrganism = () => {
  // state store
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { MenuOpen, width } = stateReducers;

  useEffect(() => {
    // hide the hamburger menu when on devices larger than 768px
    width >= 768 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={`${logo}`} alt="logo" />
        </div>
        <div className={styles.links}>
          {width >= 768 ? <LinksOrganism /> : <MenuMolecule />}
        </div>
      </nav>
      <div>{MenuOpen && <LinksOrganism />}</div>
    </header>
  );
};

export default HeaderOrganism;
