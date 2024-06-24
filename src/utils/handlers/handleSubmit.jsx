import AxiosInstance from "../../API/AxiosInstance";

export const handleSubmit = (event, dispatch, form, data) => {
  event.preventDefault();

  dispatch({ type: "TOGGLE HIDE MODAL" });

  const submission = async () => {
    await AxiosInstance.post(form.SubmitURL, data)
      .then((res) => {
        dispatch({
          type: form.Success.update_user,
          payload: form.Success.payload ? res.data : null,
        });
        dispatch({ type: "SHOW ALERT MESSAGE", payload: form.Success.message });
      })
      .catch((err) => {
        dispatch({ type: "ERROR UPDATING USER DATA", payload: err.message });
      });
  };

  return submission();
};
