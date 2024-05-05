// utilities
import { menuToggle } from "../../utils/menuToggle";

// context
import useAppContext from "../../hooks/useAppContext";

// styling
import styles from "../../styles/organism/HeaderOrganism.module.css";

const HeaderOrganism = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { Menu } = stateReducers;

  return (
    <header>
      <div className={styles.hamburger}>
        <button
          onClick={() =>
            dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: !Menu })
          }
        >
          {menuToggle(Menu)}
        </button>
        {Menu && <h1>Show</h1>}
      </div>
    </header>
  );
};

export default HeaderOrganism;
