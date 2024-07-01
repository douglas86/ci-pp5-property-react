import styles from "../../styles/molecule/TableRow.module.css";
import { buttonClick } from "../atom/elements";
import useAppContext from "../../hooks/useAppContext";
import DeletePropertyForm from "../organism/Forms/DeletePropertyForm";
import UpdatePropertyForm from "../organism/Forms/UpdatePropertyForm";

const TableRowMolecule = ({ value }) => {
  const { dispatch } = useAppContext();

  const handleTable = (item) =>
    Object.entries(item).map(([key, value], id) =>
      key === "image" || key === "id" ? null : (
        <td className={styles.td} key={id}>
          {key === "rent" ? `£ ${value}` : value}
        </td>
      ),
    );

  const handleButtons = (item) => (
    <>
      <td className={styles.td}>
        {buttonClick(
          () => {
            dispatch({
              type: "LOAD MODAL HEADER",
              payload: "Update a Property",
            });
            dispatch({
              type: "LOAD FORM COMPONENT",
              payload: <UpdatePropertyForm data={item} />,
            });
          },
          "Update",
          "outline-success",
        )}
      </td>
      <td className={styles.td}>
        {buttonClick(
          () => {
            dispatch({
              type: "LOAD MODAL HEADER",
              payload: "Delete A Property",
            });
            dispatch({
              type: "LOAD FORM COMPONENT",
              payload: <DeletePropertyForm id={item.id} />,
            });
          },
          "Delete",
          "outline-danger",
        )}
      </td>
    </>
  );

  return (
    <>
      {Object.values(value).map((items) => (
        <tr className={styles.tr} key={items.id}>
          {handleTable(items)}
          {handleButtons(items)}
        </tr>
      ))}
    </>
  );
};

export default TableRowMolecule;
