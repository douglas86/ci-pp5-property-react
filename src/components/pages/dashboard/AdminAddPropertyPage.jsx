// 3rd parties
import { useEffect } from "react";

// components
import FormOrganism from "../../organism/FormOrganism";
import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";

// custom hooks
import useAppContext from "../../../hooks/useAppContext";
import IsAdmin from "../../templates/Authentication/IsAdmin";

const AdminAddPropertyPage = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "ADD PROPERTY" });
  }, [dispatch]);

  return (
    <>
      <IsAdmin>
        <AdminButtonsMolecule />
        <FormOrganism />
      </IsAdmin>
    </>
  );
};

export default AdminAddPropertyPage;
