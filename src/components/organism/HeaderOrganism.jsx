// 3rd party libraries
import { useEffect } from "react";

// components
import LinksMolecule from "../molecule/LinksMolecule";
import MenuMolecule from "../molecule/MenuMolecule";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// assets
import logo from "../../assets/images/house.png";

// styling
import styles from "../../styles/organism/HeaderOrganism.module.css";
import { logoIcon } from "../atom/Icons/logoIcon";

const HeaderOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { MenuOpen, width } = stateReducers;

  useEffect(() => {
    width >= 768 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.title}>
          {logoIcon(logo)}
          <h1>London Properties</h1>
        </div>
        <div className={styles.links}>
          {width > 768 ? <LinksMolecule /> : <MenuMolecule />}
        </div>
      </nav>
      <div className={styles.menu}>{MenuOpen && <LinksMolecule />}</div>
    </header>
  );
};

export default HeaderOrganism;
