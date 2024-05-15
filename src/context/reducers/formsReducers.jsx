/**
 * This reducer function is used to handle all form data
 * @param state
 * @param action
 * @returns {*|(*&{forms})}
 */
export const formsReducers = (state, action) => {
  const { type, payload } = action;

  let populateForm = [];

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
      populateForm = [
        {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
          name: "username",
        },
        {
          label: "Password",
          type: "password",
          placeholder: "Please provide a valid password",
          name: "password",
        },
      ];

      return {
        ...state,
        showModal: true,
        formHeading: "Sign In",
        submitData: "dj-rest-auth/login/",
        populateForm,
        // storing data to state store on successful login
        // this type is from the userReducers function
        dispatchType: "UPDATE USER DATA",
        // dispatch that will be called for storing tokens
        tokenType: "STORE TOKENS IN STATE STORE",
      };
    case "POPULATE SIGN OUT PAGE":
      populateForm = [
        {
          label: "Are you sure you want to logout?",
        },
      ];

      return {
        ...state,
        showModal: true,
        formHeading: "Sign Out",
        submitData: "/dj-rest-auth/logout/",
        populateForm,
      };
    // Update the state of the forms from the text that was entered
    case "UPDATE FORM STATE":
      return { ...state, forms: { ...state.forms, ...payload } };
    case "FORM VALIDATION ERRORS":
      return { ...state, errors: payload };
    case "HIDE MODAL":
      return { ...state, showModal: false };
    // return the state if no case has been met
    default:
      return state;
  }
};
