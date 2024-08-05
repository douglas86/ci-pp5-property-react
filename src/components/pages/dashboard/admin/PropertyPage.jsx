import { useEffect, useState } from "react";

import IsAdmin from "../../../templates/Authentication/IsAdmin";
import UpdatePropertyForm from "../../../organism/Forms/UpdatePropertyForm";
import DeletePropertyForm from "../../../organism/Forms/DeletePropertyForm";
import CardDashOrganism from "../../../organism/CardDashOrganism";
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading, spinner } from "../../../atom/elements";

import { useAppDispatch } from "../../../../hooks/useAppContext";

import AxiosInstance from "../../../../API/AxiosInstance";

/**
 * PropertyPage component.
 *
 * @returns {JSX.Element} The rendered PropertyPage component.
 */
const PropertyPage = () => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState({});

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
  }, [dispatch]);

  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Properties")}
      {data ? (
        <CardDashOrganism
          body={data}
          modalType="Property"
          UpdateComponent={UpdatePropertyForm}
          DeleteComponent={DeletePropertyForm}
        />
      ) : (
        spinner
      )}
    </IsAdmin>
  );
};

export default PropertyPage;
