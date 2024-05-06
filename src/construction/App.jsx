// 3rd party npm packages
import { Routes, Route } from "react-router-dom";

// components
import LayoutTemplate from "../components/templates/LayoutTemplate";

// custom hooks
import useResize from "../hooks/useResize";

// utilities
import { router } from "../utils";

const App = () => {
  useResize();

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
