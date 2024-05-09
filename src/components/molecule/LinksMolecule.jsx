// custom hooks
import useAppContext from "../../hooks/useAppContext";

// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Links.module.css";

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksMolecule = () => {
  // destructuring state from state store
  const { state } = useAppContext();
  const { userReducers } = state;

  // filters and returns the correct routers
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  // filters and returns if you can sign in or sign out
  const handleAuth = router.filter((items) => {
    return userReducers === "None"
      ? items.title === "Sign In"
      : items.title === "Sign Out";
  });

  return (
    <ul className={styles.ul}>
      {handleRouter.map(({ title, path }) => (
        <li key={title} className={styles.li}>
          <a href={path} className={styles.a}>
            {title}
          </a>
        </li>
      ))}
      {handleAuth.map(({ title, path }) => (
        <li key={title} className={styles.li}>
          <a href={path} className={styles.a}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksMolecule;
