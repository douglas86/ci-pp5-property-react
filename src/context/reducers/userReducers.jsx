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
    case "UPDATE PROFILE DATA":
      return {
        ...state,
        profile: payload,
      };
    case "ERROR UPDATING USER DATA":
      return { ...state, error: payload };
    case "STORE TOKENS IN STATE STORE":
      const accessToken = payload.access;
      const refreshToken = payload.refresh;

      return { ...state, accessToken, refreshToken };
    case "DELETE TOKENS FROM STATE STORE":
      return { ...state, accessToken: null, refreshToken: null };
    default:
      return state;
  }
};
