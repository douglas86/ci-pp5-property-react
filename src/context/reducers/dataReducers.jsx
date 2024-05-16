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
      return { ...state, alertMessage: payload, showAlert: true };
    case "HIDE ALERT MESSAGE":
      return { ...state, showAlert: false };
    case "SET_DATA":
      return { ...state, data: payload };
    default:
      return state;
  }
};
