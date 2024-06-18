export const register = {
  SubmitURL: "/dj-rest-auth/registration/",
  buttonText: "Register",
  subheadingText: "If you are already registered please Login",
  loadForm: "SIGN IN FORM",
  populateForm: [
    {
      index: 1,
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      name: "username",
    },
    {
      index: 2,
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password1",
    },
    {
      index: 3,
      label: "Re-type Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password2",
    },
  ],
  Success: {
    update_user: "LOGIN USER",
    update_profile: "UPDATE PROFILE DATA",
    payload: true,
    message:
      "You have successfully registered and we have already logged you in",
  },
};
