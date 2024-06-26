import { thumbnail } from "../atom/elements";

import styles from "../../styles/molecule/TableRow.module.css";

const TableCardMolecule = ({ molecule }) => {
  console.log("molecule", molecule);

  return (
    <tr className={styles.tr}>
      {Object.entries(molecule).map(([key, value]) => (
        <>
          {key !== "id" ? (
            key === "image" ? (
              <td className={`${styles.thumbnail} ${styles.td}`}>
                {thumbnail(`${value}`, "logo")}
              </td>
            ) : (
              <td className={styles.td}>{value ? value : "none"}</td>
            )
          ) : null}
        </>
      ))}
      <td className={styles.td}>
        <a href="" className={`${styles.a} ${styles.view}`}>
          View
        </a>
      </td>
      <td className={styles.td}>
        <a href="" className={`${styles.a} ${styles.update}`}>
          Update
        </a>
      </td>
      <td className={styles.td}>
        <a href="" className={`${styles.a} ${styles.delete}`}>
          Delete
        </a>
      </td>
    </tr>
  );
};

export default TableCardMolecule;
