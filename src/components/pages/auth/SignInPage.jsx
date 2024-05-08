// 3rd party libraries
import { useEffect } from "react";

// components
import FormOrganism from "../../organism/FormOrganism";

// custom hooks
import useAppContext from "../../../hooks/useAppContext";

/**
 * Sign User In Page
 * @returns {JSX.Element}
 * @constructor
 */
const SignInPage = () => {
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
        name: "password",
      },
    ];

    // check if formLoading is not sign in
    // if not sign in, update the dispatch store for sign in data
    formLoading !== "sign in" &&
      dispatch({ type: "POPULATE SIGN IN PAGE", payload });
  }, [formLoading, dispatch]);

  return (
    <>
      <h1>Sign In Form</h1>
      <p>
        If you don't have an account click <a href="/register">here</a> to
        register
      </p>
      {formData && <FormOrganism />}
    </>
  );
};

export default SignInPage;
