import { useEffect, useState } from "react";
import ModalTemplate from "../../../templates/ModalTemplate";
import IsAdmin from "../../../templates/Authentication/IsAdmin";
import TableOrganism from "../../../organism/TableOrganism";
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading, spinner } from "../../../atom/elements";
import useAppContext from "../../../../hooks/useAppContext";
import useResize from "../../../../hooks/useResize";
import AxiosInstance from "../../../../API/AxiosInstance";

const AdminPropertyPage = () => {
  const { state, dispatch } = useAppContext();
  const { modalReducers } = state;
  const { templateModal } = modalReducers;

  const [data, setData] = useState({});

  const width = useResize();
  const headers = ["Property Owner", "Address", "Area", "Postcode", "Rent"];

  useEffect(() => {
    AxiosInstance.get("stocks/")
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
              id: id,
              image: property_image,
              name: owner,
              address: property_address,
              area: property_area,
              postcode: area_code,
              rent: rent,
            };
          },
        );
        setData(dict);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Properties")}
      {data ? (
        width > 1024 ? (
          <TableOrganism headers={headers} body={data} />
        ) : null
      ) : (
        spinner
      )}
      <ModalTemplate
        show={templateModal}
        onHide={() => dispatch({ type: "TOGGLE HIDE MODAL" })}
      />
    </IsAdmin>
  );
};

export default AdminPropertyPage;
