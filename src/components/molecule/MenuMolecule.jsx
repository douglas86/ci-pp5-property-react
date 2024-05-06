import { menuToggle } from "../../utils";
import useAppContext from "../../hooks/useAppContext";

import styles from "../../styles/molecule/Menu.module.css";

const MenuMolecule = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { MenuOpen } = stateReducers;

  return (
    <div>
      <div className={styles.hamburger}>
        <button
          onClick={() =>
            dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: !MenuOpen })
          }
        >
          {menuToggle(MenuOpen)}
        </button>
        {MenuOpen && <h1>Show</h1>}
      </div>
    </div>
  );
};

export default MenuMolecule;
