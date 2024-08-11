import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import LayoutTemplate from "../components/templates/LayoutTemplate";

import useRefreshToken from "../hooks/useRefreshToken";
import { useAppDispatch, useAppState } from "../hooks/useAppContext";

import { router } from "../utils";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import AxiosInstance from "../API/AxiosInstance";

/**
 * Represents the main application part.
 *
 * @component
 * @returns {JSX.Element} The rendered application UI.
 */
const App = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const { dataReducers, userReducers } = state;
  const { showAlert } = dataReducers;
  const { user } = userReducers;

  const heroku = "https://ci-pp5-property-api-958077e8a5b4.herokuapp.com";

  // custom hook that refreshes the auth tokens
  useRefreshToken();

  // useEffect hook to hide the show alert message after 5 seconds
  useEffect(() => {
    showAlert &&
      setTimeout(() => {
        dispatch({ type: "HIDE ALERT MESSAGE" });
      }, 5000);
  }, [showAlert, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        return await AxiosInstance.get(`profiles/${user.pk}/`);
      } catch (e) {
        return e;
      }
    };

    user &&
      fetchData()
        .then((res) => {
          console.log("res", res);
          dispatch({ type: "UPDATE PROFILE", payload: res.data[0] });
        })
        .catch((err) => {
          console.log("error", err);
        });
  }, [user]);

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
