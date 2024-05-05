// 3rd party npm packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import LayoutTemplate from "../components/templates/LayoutTemplate";

// utilities
import { router } from "../utils/router";

const App = () => {
  return (
    <div>
      <LayoutTemplate>
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
      </LayoutTemplate>
    </div>
  );
};

export default App;
