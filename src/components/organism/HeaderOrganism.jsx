// 3rd party libraries
import { useEffect } from "react";

// utilities
import { menuToggle, router } from "../../utils";

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
    width >= 1024 &&
      dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: false });
  }, [width, dispatch]);

  return (
    <>
      {width > 1024 ? (
        <div className={styles.navbar}>
          <img className={styles.logo} src={`${logo}`} alt="logo" />
          <h1 className={styles.title}>London Properties</h1>
          <div className={styles.linksContainer}>
            {router.map(({ title, path }, index) => (
              <div key={index}>
                {title !== "None" && (
                  <a href={path} className={styles.links}>
                    {title}
                  </a>
                )}
              </div>
            ))}
          </div>
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
