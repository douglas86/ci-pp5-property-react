// 3rd party npm packages
import { Routes, Route } from "react-router-dom";

// components
import LayoutTemplate from "../components/templates/LayoutTemplate";

// custom hooks
import useResize from "../hooks/useResize";

// utilities
import { router } from "../utils";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import useRefreshToken from "../hooks/useRefreshToken";
import useAppContext from "../hooks/useAppContext";

const App = () => {
  const { state } = useAppContext();
  const { userReducers } = state;

  useResize();

  // refreshes the user data tokens
  useRefreshToken();

  console.log("state", userReducers);

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
