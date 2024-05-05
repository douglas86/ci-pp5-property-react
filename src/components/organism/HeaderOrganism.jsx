// utilities
import { menuToggle } from "../../utils/menuToggle";

// context
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/organism/HeaderOrganism.module.css";

const HeaderOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { MenuOpen, width } = stateReducers;

  console.log("width", width);

  return (
    <header>
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
    </header>
  );
};

export default HeaderOrganism;
