export const changePassword = {
  SubmitURL: "profiles/change_password/",
  buttonText: "Change Password",
  subheadingText: "Are you sure you want to change your password?",
  aboveBtnText: "If you would prefer to login, please click",
  aboveBtnForm: "SIGN IN FORM",
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
      label: "Current Password",
      type: "password",
      placeholder: "Please enter your current password",
      name: "new_password",
    },
    {
      index: 3,
      label: "New Password",
      type: "password",
      placeholder: "Please type your new password",
      name: "old_password",
    },
  ],
  Success: {
    update_user: "LOGIN USER",
    update_profile: "UPDATE PROFILE DATA",
    payload: true,
    message: "You have successfully changed your password!!",
  },
};
