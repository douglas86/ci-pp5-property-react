import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import LayoutTemplate from "../components/templates/LayoutTemplate";

import useRefreshToken from "../hooks/useRefreshToken";
import useAppContext from "../hooks/useAppContext";

import { router } from "../utils";

import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Represents the main application part.
 *
 * @component
 * @returns {JSX.Element} The rendered application UI.
 */
const App = () => {
  const { state, dispatch } = useAppContext();
  const { dataReducers, userReducers } = state;
  const { showAlert } = dataReducers;

  // custom hook that refreshes the auth tokens
  useRefreshToken();

  // useEffect hook to hide the show alert message after 5 seconds
  useEffect(() => {
    showAlert &&
      setTimeout(() => {
        dispatch({ type: "HIDE ALERT MESSAGE" });
      }, 5000);
  }, [showAlert, dispatch]);

  console.log("userReducers", userReducers);

  return (
    <LayoutTemplate>
      <Routes>
        {router.map(({ path, component, permission }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
      </Routes>
    </LayoutTemplate>
  );
};

export default App;
