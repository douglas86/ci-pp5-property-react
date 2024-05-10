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
  // url: this is were the data will be sent to
  // redirectURL: this is used on a successful post to the API
  // it will redirect to the url in question

  switch (type) {
    // Populate the form fields on the register page
    case "POPULATE REGISTER PAGE":
      return {
        ...state,
        formLoading: "register",
        formData: payload,
        url: "/dj-rest-auth/registration/",
        redirectURL: "/sign-in",
      };
    // Populate the form fields on the sign-in page
    case "POPULATE SIGN IN PAGE":
      return {
        ...state,
        formLoading: "sign in",
        formData: payload,
        url: "dj-rest-auth/login/",
        redirectURL: "/",
      };
    case "POPULATE SIGN OUT PAGE":
      return {
        ...state,
        formLoading: "sign out",
        modalHeading: "Sign Out Form",
        text: "Are you sure that you want to Logout?",
        url: "/dj-rest-auth/logout/",
        redirectURL: "/",
        modalShow: payload,
      };
    // Update the state of the forms from the text that was entered
    case "UPDATE FORM STATE":
      return { ...state, forms: { ...state.forms, ...payload } };
    case "FORM VALIDATION ERRORS":
      return { ...state, errors: payload };
    case "TOGGLE SHOWING OF MODAL":
      return { ...state, showModal: payload };
    // return the state if no case has been met
    default:
      return state;
  }
};
