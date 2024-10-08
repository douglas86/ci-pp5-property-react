import { useEffect, useState } from "react";

import IsAdmin from "../../../templates/Authentication/IsAdmin";
import CardDashOrganism from "../../../organism/CardDashOrganism";
import DeleteUsersForm from "../../../organism/Forms/DeleteUsersForm";
import AdminButtonsMolecule from "../../../molecule/AdminButtonsMolecule";
import { heading, spinner } from "../../../atom/elements";

import { useAppDispatch } from "../../../../hooks/useAppContext";

import AxiosInstance from "../../../../API/AxiosInstance";

/**
 * Represents a component for managing registered users.
 *
 * @constructor
 *
 * @example
 * const usersPage = UsersPage();
 */
const UsersPage = () => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState([]);

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

        const dict = profile.map(({ id, user, profile_picture, role }) => {
          return {
            id,
            image: profile_picture,
            name: user,
            role,
          };
        });
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
      {heading("Registered Users")}
      {data.length === 0 ? (
        spinner()
      ) : (
        <CardDashOrganism
          body={data}
          modalType="Users"
          DeleteComponent={DeleteUsersForm}
        />
      )}
    </IsAdmin>
  );
};

export default UsersPage;
