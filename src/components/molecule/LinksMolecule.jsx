import { router } from "../../utils";

import styles from "../../styles/molecule/Links.module.css";

const LinksMolecule = () => {
  return (
    <ul className={styles.linksContainer}>
      {router.map(({ title, path }, index) => (
        <div key={index}>
          {title !== "None" && (
            <li className={styles.li}>
              <a href={path} className={styles.links}>
                {title}
              </a>
            </li>
          )}
        </div>
      ))}
    </ul>
  );
};

export default LinksMolecule;
