import styles from "../../styles/molecule/TableRow.module.css";
import useAppContext from "../../hooks/useAppContext";
import ModalTemplate from "../templates/ModalTemplate";
import { thumbnail } from "../atom/elements";

const TableRowMolecule = ({ value, handleButtons }) => {
  const { state, dispatch } = useAppContext();
  const { modalReducers } = state;
  const { templateModal } = modalReducers;

  const handleTable = (item) =>
    Object.entries(item).map(([key, value], id) =>
      key === "id" ? null : (
        <>
          {key === "image" ? (
            <td className={styles.td}>{thumbnail(value, "logo")}</td>
          ) : (
            <td className={styles.td} key={id}>
              {key === "rent" ? `£ ${value}` : value}
            </td>
          )}
        </>
      ),
    );

  return (
    <>
      {Object.values(value).map((items) => (
        <tr className={styles.tr} key={items.id}>
          {handleTable(items)}
          {handleButtons(items)}
        </tr>
      ))}
      <ModalTemplate
        show={templateModal}
        onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
      />
    </>
  );
};

export default TableRowMolecule;
