/**
 * Combines multiple reducers into a single reducer function.
 *
 * @param {Object} slices - An object containing the individual reducer functions.
 * @returns {Function} A reducer function that combines the input reducers.
 */
export const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({ ...acc, [prop]: slices[prop](acc[prop], action) }),
    state,
  );
