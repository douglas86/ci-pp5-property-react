// 3rd party libraries
import { useEffect } from "react";

// components
import FormOrganism from "../../organism/FormOrganism";

// custom hooks
import useAppContext from "../../../hooks/useAppContext";

const SignInPage = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { formLoading, formData } = formsReducers;

  useEffect(() => {
    const payload = [
      {
        label: "Username",
        type: "text",
        placeholder: "Enter your username",
      },
      {
        label: "Password",
        type: "password",
        placeholder: "Please provide a valid password",
      },
    ];

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
