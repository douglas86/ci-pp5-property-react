import AdminButtonsMolecule from "../../molecule/AdminButtonsMolecule";
import Form from "react-bootstrap/Form";

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

  const handleChange = (e) => {
    e.preventDefault();

    console.log("e", e);
  };

  return (
    <>
      <AdminButtonsMolecule />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="file"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Property Address</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Property Area</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Area Code</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Rent</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Form>
    </>
  );
};

export default AdminAddPropertyPage;
