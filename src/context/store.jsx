import { createContext, useMemo, useReducer } from "react";
import { rootReducers } from "./rootReducers";

const initialState = {
  userReducers: "None",
  dataReducers: {},
  formsReducers: {
    modalShow: false,
  },
  stateReducers: {
    MenuOpen: false,
    width: window.innerWidth,
  },
};

export const Context = createContext(initialState);

const init = (initialState) => {
  const { userReducers, dataReducers, formsReducers } = initialState;
  const { stateReducers } = initialState;

  return {
    userReducers,
    dataReducers,
    formsReducers,
    stateReducers,
  };
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducers, initialState, init);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
