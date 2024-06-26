import { buttonClick, thumbnail } from "../atom/elements";

import styles from "../../styles/organism/Table.module.css";

const TableOrganism = ({ headers, data }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>{headers && headers.map((header) => <th>{header}</th>)}</tr>
        </thead>
        <tbody>
          {data.profile.map(
            ({ profile_picture, user, address, area_code, role, rent }) => (
              <tr className={styles.tr}>
                <td className={`${styles.thumbnail} ${styles.td}`}>
                  {thumbnail(`${profile_picture}`, "logo")}
                </td>
                <td className={styles.td}>{user}</td>
                <td className={styles.td}>{address}</td>
                <td className={styles.td}>{area_code}</td>
                <td className={styles.td}>{role}</td>
                <td className={styles.td}>{rent}</td>
                <td className={styles.td}>
                  {buttonClick(
                    () => console.log("view clicked"),
                    "View",
                    "outline-info",
                  )}
                </td>
                <td className={styles.td}>
                  {buttonClick(
                    () => console.log("update clicked"),
                    "Update",
                    "outline-success",
                  )}
                </td>
                <td>
                  {buttonClick(
                    () => console.log("delete button"),
                    "Delete",
                    "outline-danger",
                  )}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrganism;
