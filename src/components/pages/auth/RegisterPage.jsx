import useAppContext from "../../../hooks/useAppContext";
import { useEffect } from "react";
import FormOrganism from "../../organism/FormOrganism";

const RegisterPage = () => {
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
      {
        label: "Check Password",
        type: "password",
        placeholder: "Please re enter your password",
      },
    ];

    formLoading !== "register" &&
      dispatch({ type: "POPULATE REGISTER PAGE", payload });
  }, [formLoading, dispatch]);

  return <div>{formData && <FormOrganism />}</div>;
};

export default RegisterPage;
