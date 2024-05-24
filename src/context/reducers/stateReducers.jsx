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
      return { ...state, MenuOpen: payload };
    case "SET WINDOW WIDTH":
      return { ...state, width: payload };
    case "CHANGE CAROUSEL INDEX":
      return { ...state, carouselIndex: payload };
    case "COUNT TIMER SECONDS":
      return { ...state, timer: payload === 10 ? 0 : payload };
    default:
      return state;
  }
};
