// 3rd party npm packages
import { Routes, Route } from "react-router-dom";

// components
import LayoutTemplate from "../components/templates/LayoutTemplate";

// custom hooks
import useResize from "../hooks/useResize";

import axios from "axios";

// utilities
import { router } from "../utils";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import useAppContext from "../hooks/useAppContext";
import { useEffect } from "react";

const App = () => {
  const { state, dispatch } = useAppContext();
  const { dataReducers, userReducers } = state;
  const { showAlert } = dataReducers;

  // custom hook that detects page width
  useResize();

  // custom hook that refreshes the auth tokens
  // useRefreshToken();

  // useEffect hook to hide the show alert message after 5 seconds
  useEffect(() => {
    showAlert &&
      setTimeout(() => {
        dispatch({ type: "HIDE ALERT MESSAGE" });
      }, 5000);
  }, [showAlert]);

  useEffect(() => {
    axios
      .get("dj-rest-auth/user")
      .then(async (res) => {
        await dispatch({ type: "UPDATE USER DATA", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR UPDATING USER DATA",
          payload: err.response.data,
        });
      });
  }, []);

  console.log("userReducers", userReducers);

  return (
    <LayoutTemplate>
      <Routes>
        {router.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
      </Routes>
    </LayoutTemplate>
  );
};

export default App;
