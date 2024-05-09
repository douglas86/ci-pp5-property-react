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
  return (
    <ul className={styles.ul}>
      {router.map(
        ({ title, path }) =>
          title !== "None" && (
            <li key={title} className={styles.li}>
              <a href={path} className={styles.a}>
                {title}
              </a>
            </li>
          ),
      )}
    </ul>
  );
};

export default LinksMolecule;
