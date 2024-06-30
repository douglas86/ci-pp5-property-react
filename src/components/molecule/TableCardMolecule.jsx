import { buttonClick, thumbnail } from "../atom/elements";

import styles from "../../styles/molecule/TableRow.module.css";
import useAppContext from "../../hooks/useAppContext";
import ModalOrganism from "../organism/ModalOrganism";

const TableCardMolecule = ({ molecule }) => {
  const { state, dispatch } = useAppContext();
  const { modalReducers } = state;
  const { showModal } = modalReducers;

  return (
    <>
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
          <a href="" className={`${styles.a} ${styles.update}`}>
            Update
          </a>
        </td>
        <td className={styles.td}>
          {buttonClick(
            () => {
              dispatch({ type: "RESET AUTH FORM" });
              dispatch({ type: "DELETE PROPERTY", payload: molecule.id });
              dispatch({ type: "TOGGLE SHOW MODAL" });
            },
            "Delete",
            "outline-danger",
          )}
        </td>
      </tr>
      <ModalOrganism
        show={showModal}
        onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
        auth={false}
      />
    </>
  );
};

export default TableCardMolecule;
