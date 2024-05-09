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
      return { user: payload };
    case "USER DATA ERROR":
      return payload;
    default:
      return state;
  }
};
