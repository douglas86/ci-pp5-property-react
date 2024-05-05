/**
 * This reducer function will handle state for the entire app
 * @param state
 * @param action
 * @returns {*|(*&{user})}
 */
export const stateReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE HAMBURGER TOGGLE":
      return { ...state, user: payload };
    default:
      return state;
  }
};
