import useAppContext from "../../../hooks/useAppContext";
import { useEffect } from "react";
import FormOrganism from "../../organism/FormOrganism";

/**
 * Register the users Page
 * @returns {JSX.Element}
 * @constructor
 */
const RegisterPage = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { formLoading, formData } = formsReducers;

  useEffect(() => {
    // payload is a variable to updates what fields I want in the form
    // label, type and placeholder follows the attributes that are normally on forms
    const payload = [
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
        name: "password1",
      },
      {
        label: "Check Password",
        type: "password",
        placeholder: "Please re enter your password",
        name: "password2",
      },
    ];

    // check if formLoading is not register
    // if not register, update the dispatch store for register data
    formLoading !== "register" &&
      dispatch({ type: "POPULATE REGISTER PAGE", payload });
  }, [formLoading, dispatch]);

  return (
    <>
      <h1>Register here</h1>
      {formData && <FormOrganism />}
    </>
  );
};

export default RegisterPage;
