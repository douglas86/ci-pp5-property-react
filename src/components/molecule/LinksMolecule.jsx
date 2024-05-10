// custom hooks
import useAppContext from "../../hooks/useAppContext";

// utilities
import { router } from "../../utils";

// styling
import styles from "../../styles/molecule/Links.module.css";

// function MyVerticallyCenteredModal(props) {
//   const { state, dispatch } = useAppContext();
//   const { formsReducers } = state;
//   const { modalHeading, text, url, forms, redirectURL } = formsReducers;
//
//   const navigate = useNavigate();
//
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//
//     // TODO: data ready for API
//
//     try {
//       const { data } = await axiosRes.post(url, forms);
//
//       navigate(redirectURL);
//       console.log("data", data);
//     } catch (e) {
//       dispatch({ type: "FORM VALIDATION ERRORS", payload: e.response.data });
//     }
//   };
//
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           {modalHeading}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>{text}</Modal.Body>
//       <Modal.Footer>
//         <form onSubmit={handleSubmit}>
//           <Button onClick={props.onHide}>Close</Button>
//           <Button
//             type="submit"
//             onClick={() =>
//               dispatch({ type: "TOGGLE SHOWING OF MODAL", payload: false })
//             }
//           >
//             OK
//           </Button>
//         </form>
//       </Modal.Footer>
//     </Modal>
//   );
// }

/**
 * This molecule if to deal with the links on the navbar for the different pages
 * @returns {JSX.Element}
 * @constructor
 */
const LinksMolecule = () => {
  // destructuring state from state store
  const { state } = useAppContext();
  const { userReducers, formsReducers } = state;
  const { url } = formsReducers;

  // filters and returns the correct routers
  const handleRouter = router.filter((items) => {
    return (
      items.title !== "None" &&
      items.title !== "Sign In" &&
      items.title !== "Sign Out"
    );
  });

  const handleAuth = userReducers === "None";

  return (
    <ul className={styles.ul}>
      {handleRouter.map(({ title, path }) => (
        <li key={title} className={styles.li}>
          <a href={path} className={styles.a}>
            {title}
          </a>
        </li>
      ))}
      {handleAuth ? (
        <li className={styles.li}>
          <a href={url} className={styles.a}>
            Sign In
          </a>
        </li>
      ) : (
        <li className={styles.li}>
          <a href={url} className={styles.a}>
            Sign Out
          </a>
        </li>
      )}
    </ul>
  );
};

export default LinksMolecule;
