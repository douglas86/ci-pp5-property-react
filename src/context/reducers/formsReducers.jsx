import { register, signIn, signOut } from "../../utils/formContent";
import { changePassword, addProperty } from "../../utils/formContent";

export const formsReducers = (state, action) => {
  const { type } = action;

  switch (type) {
    case "SIGN IN FORM":
      return { ...state, authForm: signIn };
    case "SIGN OUT FORM":
      return { ...state, authForm: signOut };
    case "REGISTER FORM":
      return { ...state, authForm: register };
    case "CHANGE PASSWORD":
      return { ...state, authForm: changePassword };
    case "ADD PROPERTY":
      return { ...state, form: addProperty };
    default:
      return state;
  }
};
