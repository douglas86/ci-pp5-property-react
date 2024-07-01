import styles from "../../styles/organism/Table.module.css";
import TableRowMolecule from "../molecule/TableRowMolecule";
import { buttonClick } from "../atom/elements";
import useAppContext from "../../hooks/useAppContext";

const TableOrganism = ({
  headers,
  body,
  modalType,
  UpdateComponent,
  DeleteComponent,
}) => {
  const { dispatch } = useAppContext();

  const handleButtons = (item) => (
    <>
      {UpdateComponent ? (
        <td className={styles.td}>
          {buttonClick(
            () => {
              dispatch({
                type: "LOAD MODAL HEADER",
                payload: `Update a ${modalType}`,
              });
              dispatch({
                type: "LOAD FORM COMPONENT",
                payload: <UpdateComponent data={item} />,
              });
            },
            "Update",
            "outline-success",
          )}
        </td>
      ) : null}
      {DeleteComponent ? (
        <td className={styles.td}>
          {buttonClick(
            () => {
              dispatch({
                type: "LOAD MODAL HEADER",
                payload: `Do you wish to Delete a ${modalType}?`,
              });
              dispatch({
                type: "LOAD FORM COMPONENT",
                payload: <DeleteComponent id={item.id} />,
              });
            },
            "Delete",
            "outline-danger",
          )}
        </td>
      ) : null}
    </>
  );

  return (
    <table className={`${styles.table} table`}>
      <thead>
        <tr className={styles.tr}>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableRowMolecule value={body} handleButtons={handleButtons} />
      </tbody>
    </table>
  );
};

export default TableOrganism;

// import TableCardMolecule from "../molecule/TableCardMolecule";
//
// import styles from "../../styles/organism/Table.module.css";
//
// const TableOrganism = ({ headers, body }) => {
//   return (
//     <div>
//       <table className={styles.table}>
//         <thead>
//           <tr className={styles.tr}>
//             {headers && headers.map((header) => <th key={header}>{header}</th>)}
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(body).map(([key, value]) => (
//             <TableCardMolecule key={key} molecule={value} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
//
// export default TableOrganism;
