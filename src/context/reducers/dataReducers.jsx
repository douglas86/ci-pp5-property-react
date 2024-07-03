/**
 * This reducer function is used to deal with data from API
 * @param state
 * @param action
 * @returns {(*&{data})|*}
 */
export const dataReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SHOW ALERT MESSAGE":
      return { ...state, showMessage: payload, showAlert: true };
    case "HIDE ALERT MESSAGE":
      return { ...state, showAlert: false };
    case "SHOW SUCCESSFULLY ALERT MESSAGE":
      return {
        ...state,
        showMessage: payload,
        showAlert: true,
        alertColor: "success",
      };
    case "SHOW UNSUCCESSFULLY ALERT MESSAGE":
      return {
        ...state,
        showMessage: payload,
        showAlert: true,
        alertColor: "danger",
      };
    case "SET_DATA":
      return { ...state, data: payload };
    default:
      return state;
  }
};
