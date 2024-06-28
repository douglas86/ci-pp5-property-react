// components
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading, spinner } from "../../../atom/elements";
import IsAdmin from "../../../templates/Authentication/IsAdmin";

// styling
import { useEffect, useState } from "react";
import useResize from "../../../../hooks/useResize";
import AxiosInstance from "../../../../API/AxiosInstance";
import TableOrganism from "../../../organism/TableOrganism";
import CardDashOrganism from "../../../organism/CardDashOrganism";

const AdminPropertyPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [body, setBody] = useState(null);

  const width = useResize();

  const headers = [
    "",
    "Property Owner",
    "Address",
    "Area",
    "Postcode",
    "Role",
    "Rent",
  ];

  useEffect(() => {
    AxiosInstance.get("stocks/")
      .then((res) => {
        const { data } = res.data;
        setData(data);

        const dict = data.map((item) => {
          return {
            id: item.id,
            image: item.property_image,
            name: item.owner,
            address: item.property_address,
            area: item.property_area,
            postcode: item.area_code,
            rent: item.rent,
          };
        });
        setBody(dict);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Properties")}
      {data ? (
        width > 1024 ? (
          <TableOrganism headers={headers} body={body} />
        ) : (
          <CardDashOrganism body={body} />
        )
      ) : (
        spinner()
      )}
    </IsAdmin>
  );
};

export default AdminPropertyPage;
