// components
import FormOrganism from "../../organism/FormOrganism";
import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";

const AdminAddPropertyPage = () => {
  const data = [
    {
      label: "Property Address",
      type: "text",
      placeholder: "Add new address here",
      name: "property_address",
    },
    {
      label: "Property Area",
      type: "text",
      placeholder: "Add property area",
      name: "property_area",
    },
    {
      label: "Postcode",
      type: "text",
      placeholder: "Add property postcode",
      name: "area_code",
    },
    {
      label: "Monthly Rent",
      type: "number",
      placeholder: "Add property monthly rent",
      name: "rent",
    },
    {
      label: "Property Image",
      type: "file",
      placeholder: "Add property image",
      name: "property_image",
    },
  ];

  return (
    <>
      <AdminButtonsMolecule />
      <FormOrganism data={data} />
    </>
  );
};

export default AdminAddPropertyPage;
