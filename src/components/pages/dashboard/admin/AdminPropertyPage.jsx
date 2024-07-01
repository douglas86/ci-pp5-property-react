import { useEffect, useState } from "react";

import IsAdmin from "../../../templates/Authentication/IsAdmin";
import TableOrganism from "../../../organism/TableOrganism";
import UpdatePropertyForm from "../../../organism/Forms/UpdatePropertyForm";
import DeletePropertyForm from "../../../organism/Forms/DeletePropertyForm";
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading, spinner } from "../../../atom/elements";

import useAppContext from "../../../../hooks/useAppContext";
import useResize from "../../../../hooks/useResize";

import AxiosInstance from "../../../../API/AxiosInstance";
import CardDashOrganism from "../../../organism/CardDashOrganism";

const AdminPropertyPage = () => {
  const { dispatch } = useAppContext();

  const [data, setData] = useState({});

  const width = useResize();
  const headers = ["Property Owner", "Address", "Area", "Postcode", "Rent"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        return await AxiosInstance.get("stocks/");
      } catch (e) {
        return e;
      }
    };

    fetchData()
      .then((res) => {
        const { data } = res.data;
        setData(data);

        const dict = data.map(
          ({
            area_code,
            id,
            owner,
            property_address,
            property_area,
            property_image,
            rent,
          }) => {
            return {
              id,
              image: property_image,
              name: owner,
              address: property_address,
              area: property_area,
              postcode: area_code,
              rent,
            };
          },
        );
        setData(dict);
      })
      .catch((err) => {
        const { message } = err;
        dispatch({ type: "TOGGLE HIDE MODAL" });
        dispatch({
          type: "SHOW UNSUCCESSFULLY ALERT MESSAGE",
          payload: message,
        });
      });
  }, [data, dispatch]);

  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Properties")}
      {data ? (
        width > 1024 ? (
          <TableOrganism
            headers={headers}
            body={data}
            modalType="Property"
            UpdateComponent={UpdatePropertyForm}
            DeleteComponent={DeletePropertyForm}
          />
        ) : (
          <CardDashOrganism
            body={data}
            modalType="Property"
            UpdateComponent={UpdatePropertyForm}
            DeleteComponent={DeletePropertyForm}
          />
        )
      ) : (
        spinner
      )}
    </IsAdmin>
  );
};

export default AdminPropertyPage;
