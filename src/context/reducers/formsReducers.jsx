import { register, signIn, signOut } from "../../utils/formContent";
import { changePassword, addProperty } from "../../utils/formContent";
import { updateProperty } from "../../utils/formContent";

export const formsReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "RESET FORM":
      return { ...state, form: null };
    case "RESET AUTH FORM":
      return { ...state, authForm: null };
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
    case "UPDATE PROPERTY":
      return { ...state, form: updateProperty(payload) };
    default:
      return state;
  }
};
