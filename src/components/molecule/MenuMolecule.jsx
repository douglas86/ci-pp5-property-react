import { menuToggle } from "../../utils";

import useAppContext from "../../hooks/useAppContext";

import styles from "../../styles/molecule/Menu.module.css";

/**
 * Represents a menu molecule component that handles menu state and toggle functionality.
 *
 * @returns {JSX} The rendered menu molecule component.
 */
const MenuMolecule = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { MenuOpen } = stateReducers;

  return (
    <>
      <div className={styles.menu}>
        <button
          className={styles.button}
          onClick={() =>
            dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: !MenuOpen })
          }
        >
          {menuToggle(MenuOpen)}
        </button>
      </div>
    </>
  );
};

export default MenuMolecule;
