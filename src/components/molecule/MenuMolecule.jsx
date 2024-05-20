// utilities
import { menuToggle } from "../../utils";

// custom hooks
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/molecule/Menu.module.css";

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
