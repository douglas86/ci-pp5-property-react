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
    case "LOGIN USER":
      const { access, access_expiration, refresh, refresh_expiration, user } =
        payload;
      return {
        ...state,
        access,
        access_expiration,
        refresh,
        refresh_expiration,
        user: user === undefined ? state.user : user,
      };
    case "LOGOUT USER":
      return {
        ...state,
        access: null,
        access_expiration: null,
        refresh: null,
        refresh_expiration: null,
        user: null,
        profile: null,
      };
    case "ERROR UPDATING USER DATA":
      return { ...state, error: payload };
    default:
      return state;
  }
};
