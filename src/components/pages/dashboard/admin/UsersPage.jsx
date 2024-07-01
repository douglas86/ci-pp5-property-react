import { useEffect, useState } from "react";

import IsAdmin from "../../../templates/Authentication/IsAdmin";
import TableOrganism from "../../../organism/TableOrganism";
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading, spinner } from "../../../atom/elements";

import useResize from "../../../../hooks/useResize";
import useAppContext from "../../../../hooks/useAppContext";

import AxiosInstance from "../../../../API/AxiosInstance";
import CardDashOrganism from "../../../organism/CardDashOrganism";
import DeleteUsersForm from "../../../organism/Forms/DeleteUsersForm";

const UsersPage = () => {
  const { dispatch } = useAppContext();

  const [data, setData] = useState({});

  const width = useResize();
  const headers = ["", "Name", "Role"];

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
              image: profile_picture,
              name: user,
              role,
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
      {heading("Registered Users")}
      {data ? (
        width > 1024 ? (
          <TableOrganism headers={headers} body={data} />
        ) : (
          <CardDashOrganism
            body={data}
            modalType="Users"
            DeleteComponent={DeleteUsersForm}
          />
        )
      ) : (
        spinner
      )}
    </IsAdmin>
  );
};

export default UsersPage;
