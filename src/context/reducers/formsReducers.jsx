/**
 * This reducer function is used to handle all form data
 * @param state
 * @param action
 * @returns {*|(*&{forms})}
 */
export const formsReducers = (state, action) => {
  const { type, payload } = action;

  // Description of an object used in this store

  // forms: state used for data entered into the input box
  // formLoading: this is the form that you are wanting to use,
  // this flag will stop useEffect from updating unnecessarily
  // formData: this is used for what fields you want in the form
  // this is so that I can update form dynamically from the state store

  switch (type) {
    // Populate the form fields on the register page
    case "POPULATE REGISTER PAGE":
      return { ...state, formLoading: "register", formData: payload };
    // Populate the form fields on the sign-in page
    case "POPULATE SIGN IN PAGE":
      return {
        ...state,
        formLoading: "sign in",
        formData: payload,
      };
    // Update the state of the forms from the text that was entered
    case "UPDATE FORM STATE":
      return { ...state, forms: { ...state.forms, ...payload } };
    // return the state if no case has been met
    default:
      return state;
  }
};
