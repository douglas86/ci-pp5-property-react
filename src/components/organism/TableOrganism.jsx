import styles from "../../styles/organism/Table.module.css";
import TableRowMolecule from "../molecule/TableRowMolecule";

const TableOrganism = ({ headers, body }) => {
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
        <TableRowMolecule value={body} />
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
