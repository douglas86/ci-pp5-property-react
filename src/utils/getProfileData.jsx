import AxiosInstance from "../API/AxiosInstance";

export const getProfileData = (profileID, dispatch) => {
  const handleProfile = async () => {
    try {
      return await AxiosInstance.get(`/profiles/${profileID}/`);
    } catch (error) {
      dispatch({ type: "ERROR UPDATING USER DATA", payload: error });
    }
  };

  handleProfile()
    .then(async (res) => {
      const data = await res.data[0];

      console.log("results", res);
      console.log("data", data);

      dispatch({ type: "UPDATE PROFILE DATA", payload: data });
    })
    .catch((err) => {
      dispatch({
        type: "ERROR UPDATING USER DATA",
        payload: err,
      });
    });
};
