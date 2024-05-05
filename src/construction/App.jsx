// 3rd party npm packages
import { Routes, Route } from "react-router-dom";

// components
import LayoutTemplate from "../components/templates/LayoutTemplate";

// utilities
import { router } from "../utils/router";

const App = () => {
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
