import AxiosInstance from "../API/AxiosInstance";

export const getProfileData = async (res, dispatch) => {
  const { access, refresh, user } = await res.data;
  const { pk } = user;

  document.cookie = `auth-token=${access}`;
  document.cookie = `refresh-token=${refresh}`;

  dispatch({ type: "TOGGLE HIDE MODAL" });
  dispatch({ type: "UPDATE USER DATA", payload: user });

  const handleProfile = async () => {
    try {
      return await AxiosInstance.get(`profiles/${pk}`);
    } catch (error) {
      return error;
    }
  };

  handleProfile()
    .then(async (response) => {
      const results = await response;
      const data = await results.data[0];

      dispatch({ type: "UPDATE PROFILE DATA", payload: data });
    })
    .catch((error) => {
      dispatch({ type: "ERROR UPDATING USER DATA", payload: error });
    });
};

// export const getProfileData = (profileID, dispatch) => {
//   const handleProfile = async () => {
//     try {
//       return await AxiosInstance.get(`/profiles/${profileID}/`);
//     } catch (error) {
//       dispatch({ type: "ERROR UPDATING USER DATA", payload: error });
//     }
//   };
//
//   handleProfile()
//     .then(async (res) => {
//       const data = await res.data[0];
//
//       dispatch({ type: "UPDATE PROFILE DATA", payload: data });
//     })
//     .catch((err) => {
//       dispatch({
//         type: "ERROR UPDATING USER DATA",
//         payload: err,
//       });
//     });
// };
