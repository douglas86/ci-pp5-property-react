/**
 * This reducer function will handle all data for current logged-in user
 * @param state
 * @param action
 * @returns {*|(*&{user})}
 */
export const userReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE USER DATA":
      return {
        ...state,
        user: payload,
      };
    case "STORE TOKENS IN LOCALSTORAGE":
      const accessToken = payload.data.access;
      const refreshToken = payload.data.refresh;

      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("refreshToken", refreshToken);
      return { ...state, accessToken, refreshToken };
    case "DELETE TOKENS IN LOCALSTORAGE":
      // localStorage.removeItem("accessToken");
      // localStorage.removeItem("refreshToken");
      return { ...state, accessToken: null, refreshToken: null };
    default:
      return state;
  }
};
