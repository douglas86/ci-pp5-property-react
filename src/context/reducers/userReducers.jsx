/**
 * This reducer functions handles all state for the current user
 * @param state
 * @param action
 * @returns {{error}|{}|{user: (*)}|{profile: (*)}}
 */
export const userReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE PROFILE":
      return { ...state, profile: { ...state.profile, ...payload } };
    case "LOGIN USER":
      return { ...state, user: { ...state.user, ...payload } };
    case "LOGOUT USER":
      return {};
    case "ERROR UPDATING USER DATA":
      return { ...state, error: payload };
    default:
      return state;
  }
};
