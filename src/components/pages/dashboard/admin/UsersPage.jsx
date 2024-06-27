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
  const [body, setBody] = useState([]);

  const headers = ["", "Name", "Address", "Postcode", "Role", "Rent"];

  useEffect(() => {
    AxiosInstance.get("profiles/")
      .then((res) => {
        const { profile } = res.data;
        setData(res.data);

        const dict = profile.map((item) => {
          return {
            id: item.id,
            image: item.profile_picture,
            name: item.user[0].toUpperCase() + item.user.slice(1),
            address: item.address,
            postcode: item.postcode,
            role: item.role[0].toUpperCase() + item.role.slice(1),
            rent: item.rent,
          };
        });
        setBody((prevState) => [...prevState, dict]);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Registered Users")}
      {data ? <TableOrganism headers={headers} body={body[0]} /> : null}
    </IsAdmin>
  );
};

export default UsersPage;
