// 3rd parties
import { useEffect } from "react";

// components
import FormOrganism from "../../organism/FormOrganism";
import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";

// custom hooks
import useAppContext from "../../../hooks/useAppContext";

const AdminAddPropertyPage = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "ADD PROPERTY" });
  }, [dispatch]);

  return (
    <>
      <AdminButtonsMolecule />
      <FormOrganism />
    </>
  );
};

export default AdminAddPropertyPage;
