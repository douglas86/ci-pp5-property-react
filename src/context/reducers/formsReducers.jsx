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
    case "POPULATE REGISTER PAGE":
      return { ...state, formLoading: "register", formData: payload };
    case "POPULATE SIGN IN PAGE":
      return {
        ...state,
        formLoading: "sign in",
        formData: payload,
      };
    case "UPDATE FORM STATE":
      return { ...state, forms: { ...state.forms, ...payload } };
    default:
      return state;
  }
};
