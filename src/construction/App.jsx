// 3rd party npm packages
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// components
import LayoutTemplate from "../components/templates/LayoutTemplate";

// custom hooks
import useRefreshToken from "../hooks/useRefreshToken";
import useAppContext from "../hooks/useAppContext";

// utilities
import { router } from "../utils";

// styling
import "bootstrap/dist/css/bootstrap.min.css";

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
