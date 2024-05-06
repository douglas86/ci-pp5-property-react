import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Menu.module.css";
import li from "../../styles/general/general.module.css";

const ShowMenuMolecule = () => {
  return (
    <div className={styles.showMenu}>
      <ul>
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
    </div>
  );
};

export default ShowMenuMolecule;
