export const signIn = {
  SubmitURL: "dj-rest-auth/login/",
  buttonText: "Login",
  subheadingText: "If you have not registered yet please click here?",
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
      placeholder: "Please provide a valid password",
      name: "password",
    },
  ],
};
