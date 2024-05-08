// 3rd party libraries
import { useEffect } from "react";

// components
import FormOrganism from "../../organism/FormOrganism";

// custom hooks
import useAppContext from "../../../hooks/useAppContext";

const SignInPage = () => {
  const { state, dispatch } = useAppContext();
  const { formsReducers } = state;
  const { formData } = formsReducers;

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

    formData === undefined &&
      dispatch({ type: "POPULATE SIGN IN PAGE", payload });
  }, [formData, dispatch]);

  return (
    <>
      <h1>Sign In Form</h1>
      {formData && <FormOrganism />}
    </>
  );
};

export default SignInPage;
