import { router } from "../../utils";

import styles from "../../styles/molecule/Links.module.css";

const LinksMolecule = () => {
  return (
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
  );
};

export default LinksMolecule;
