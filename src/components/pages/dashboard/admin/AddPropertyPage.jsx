import IsAdmin from "../../../templates/Authentication/IsAdmin";
import CreatePropertyForm from "../../../organism/Forms/CreatePropertyForm";
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";

/**
 * Creates a property page with admin buttons and a form for creating a new property.
 *
 * @returns {React.ReactNode} The property page component.
 */
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
