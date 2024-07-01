import { useEffect, useState } from "react";

import IsAdmin from "../../../templates/Authentication/IsAdmin";
import TableOrganism from "../../../organism/TableOrganism";
import DeleteUsers from "../../../organism/Forms/DeleteUsers";
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading, spinner } from "../../../atom/elements";

import useResize from "../../../../hooks/useResize";
import useAppContext from "../../../../hooks/useAppContext";

import AxiosInstance from "../../../../API/AxiosInstance";

const UsersPage = () => {
  const { dispatch } = useAppContext();

  const [data, setData] = useState({});

  const width = useResize();
  const headers = ["Name", "Role", "Rent"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        return await AxiosInstance.get("profiles/");
      } catch (e) {
        return e;
      }
    };

    fetchData()
      .then((res) => {
        const { profile } = res.data;
        setData(profile);

        const dict = profile.map(
          ({ id, user, profile_picture, role, rent }) => {
            return {
              id,
              name: user,
              image: profile_picture,
              role,
              rent: rent ? rent : 0,
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
  }, []);

  return (
    <IsAdmin>
      <AdminButtonsMolecule />
      {heading("Registered Users")}
      {data ? (
        width > 1024 ? (
          <TableOrganism
            headers={headers}
            body={data}
            modalType="User"
            DeleteComponent={DeleteUsers}
          />
        ) : null
      ) : (
        spinner
      )}
    </IsAdmin>
  );
};

export default UsersPage;
