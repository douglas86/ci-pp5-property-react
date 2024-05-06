import { router } from "../../utils";

import styles from "../../styles/molecule/Links.module.css";
import li from "../../styles/general/general.module.css";

const LinksMolecule = () => {
  return (
    <ul className={styles.linksContainer}>
      {router.map(({ title, path, icon }, index) => (
        <div key={index}>
          {title !== "None" && (
            <li className={li.li}>
              <a href={path} className={li.links}>
                <img className={li.images} src={`${icon}`} alt={title} />{" "}
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
