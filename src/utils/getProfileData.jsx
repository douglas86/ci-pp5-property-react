import AxiosInstance from "../API/AxiosInstance";

/**
 * Retrieves profile data from the server and updates the user's profile and data.
 * Also handles error cases and updates the store accordingly.
 *
 * @param {Response} res - The response object received from the server.
 * @param {Function} dispatch - The dispatch function from the Redux store.
 *
 * @returns {Promise<void>} - A promise that resolves when the profile data is retrieved and updated successfully, or rejects with an error if there is any issue.
 */
export const getProfileData = async (res, dispatch) => {
  const { access, refresh, user } = await res.data;

  access && (document.cookie = `auth-token=${access}`);
  refresh && (document.cookie = `refresh-token=${refresh}`);

  dispatch({ type: "TOGGLE HIDE MODAL" });
  dispatch({ type: "LOGIN USER", payload: user });

  const handleProfile = async () => {
    try {
      const pk = user === undefined ? res.data.pk : user.pk;
      return await AxiosInstance.get(`profiles/${pk}/`);
    } catch (error) {
      return error;
    }
  };

  handleProfile()
    .then(async (response) => {
      const results = await response.data[0];

      console.log("response", response);

      dispatch({
        type: "SHOW SUCCESSFULLY ALERT MESSAGE",
        payload: "You have successfully been logged in",
      });
      dispatch({ type: "UPDATE PROFILE", payload: results });
    })
    .catch((error) => {
      dispatch({ type: "ERROR UPDATING USER DATA", payload: error });
    });
};
