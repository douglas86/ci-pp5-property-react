import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutTemplate from "../components/templates/LayoutTemplate";

import { router } from "../utils/router";
import HomePage from "../components/pages/HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <>
            {router.map((items, index) => (
              <>
                <Route
                  key={index}
                  path={items.path}
                  element={items.component}
                />
              </>
            ))}
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
