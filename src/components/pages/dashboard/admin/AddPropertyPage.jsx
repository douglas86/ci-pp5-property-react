// components
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";

// custom hooks
import IsAdmin from "../../../templates/Authentication/IsAdmin";
import CreatePropertyForm from "../../../organism/Forms/CreatePropertyForm";

const AddPropertyPage = () => {
  return (
    <>
      <IsAdmin>
        <AdminButtonsMolecule />
        <CreatePropertyForm />
      </IsAdmin>
    </>
  );
};

export default AddPropertyPage;
