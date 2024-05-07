import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Menu.module.css";

const ShowMenuMolecule = () => {
  return (
    <div>
      <ul>
        {router.map(({ title, path, icon }, index) => (
          <div key={index}>
            {title !== "None" && (
              <li>
                <a href={path}>
                  <img src={`${icon}`} alt={title} /> {title}
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
