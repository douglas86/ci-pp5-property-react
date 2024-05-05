/**
 * This reducer function is used to handle all form data
 * @param state
 * @param action
 * @returns {*|(*&{forms})}
 */
export const formsReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE FORMS":
      return { ...state, forms: payload };
    default:
      return state;
  }
};
