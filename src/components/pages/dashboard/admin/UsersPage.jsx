// components
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading } from "../../../atom/elements";

// styling
import IsAdmin from "../../../templates/Authentication/IsAdmin";
import { useEffect, useState } from "react";
import AxiosInstance from "../../../../API/AxiosInstance";
import TableOrganism from "../../../organism/TableOrganism";

const UsersPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState({});

  const headers = [
    "",
    "Name",
    "Address",
    "Postcode",
    "Role in Organization",
    "Rent",
  ];

  useEffect(() => {
    AxiosInstance.get("profiles/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  console.log("data", data);

  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Registered Users")}
      {data ? <TableOrganism headers={headers} data={data} /> : null}
    </IsAdmin>
  );
};

export default UsersPage;
