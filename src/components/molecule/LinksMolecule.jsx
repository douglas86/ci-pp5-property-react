// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Links.module.css";

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
