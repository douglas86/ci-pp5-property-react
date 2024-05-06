// components
import { assetIcon } from "../atom/Icons";

// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Links.module.css";

const LinksMolecule = () => {
  return (
    <ul className={styles.ul}>
      {router.map(
        ({ title, path, icon }) =>
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

// import { router } from "../../utils";
//
// import styles from "../../styles/molecule/Links.module.css";
// import li from "../../styles/general/general.module.css";
//
// const LinksMolecule = () => {
//   return (
//     <ul className={styles.linksContainer}>
//       {router.map(({ title, path, icon }, index) => (
//         <div key={index}>
//           {title !== "None" && (
//             <li className={li.li}>
//               <a href={path} className={li.links}>
//                 <img className={li.images} src={`${icon}`} alt={title} />{" "}
//                 {title}
//               </a>
//             </li>
//           )}
//         </div>
//       ))}
//     </ul>
//   );
// };
//
// export default LinksMolecule;
