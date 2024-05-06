// 3rd party libraries
import { useEffect } from "react";

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

  // set the MenuOpen to false if not on a mobile device,
  // this will update dynamically
  useEffect(() => {
    width >= 768 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <>
      {width > 768 ? (
        <div className={styles.navbar}>
          <h1>Navbar</h1>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default HeaderOrganism;
