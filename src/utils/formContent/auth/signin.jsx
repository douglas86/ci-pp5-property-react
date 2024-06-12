export const signIn = {
  SubmitURL: "dj-rest/auth/login/",
  buttonText: "Login",
  populateForm: [
    {
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      name: "password",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Please provide a valid password",
      name: "password",
    },
  ],
};
