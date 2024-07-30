import AxiosInstance from "../API/AxiosInstance";

export const getProfileData = async (res, dispatch) => {
  const { access, refresh, user } = await res.data;

  access && (document.cookie = `auth-token=${access}`);
  refresh && (document.cookie = `refresh-token=${refresh}`);

  dispatch({ type: "TOGGLE HIDE MODAL" });
  dispatch({ type: "UPDATE USER DATA", payload: user });

  const handleProfile = async () => {
    try {
      const { pk } = user;
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
