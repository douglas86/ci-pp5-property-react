// 3rd party libraries
import { useEffect } from "react";

// components
import LinksOrganism from "./LinksOrganism";
import MenuMolecule from "../molecule/MenuMolecule";

// custom hooks
import useAppContext from "../../hooks/useAppContext";
import useResize from "../../hooks/useResize";

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
  const { MenuOpen } = stateReducers;

  const width = useResize();

  useEffect(() => {
    // hide the hamburger menu when on devices larger than 768px
    width >= 768 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
            <img src={`${logo}`} alt="logo" />
          </a>
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
