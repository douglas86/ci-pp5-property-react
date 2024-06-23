// components
import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";
import FormOrganism from "../../organism/FormOrganism";
import { useEffect } from "react";
import useAppContext from "../../../hooks/useAppContext";

const AdminAddPropertyPage = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: "ADD PROPERTY" });
  }, [dispatch]);

  return (
    <>
      <AdminButtonsMolecule />
      <h1>Add a new Property</h1>
      <FormOrganism />
    </>
  );
};

export default AdminAddPropertyPage;
