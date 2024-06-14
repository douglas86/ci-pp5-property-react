import { createContext, useMemo, useReducer } from "react";
import { rootReducers } from "./rootReducers";

const initialState = {
  userReducers: {
    user: null,
    access: null,
    access_expiration: null,
  },
  dataReducers: {
    showAlert: false,
  },
  formsReducers: {
    form: null,
  },
  modalReducers: {
    showModal: false,
  },
  stateReducers: {
    MenuOpen: false,
  },
};

export const Context = createContext(initialState);

const init = (initialState) => {
  const { userReducers, dataReducers, formsReducers } = initialState;
  const { stateReducers, modalReducers } = initialState;

  return {
    userReducers,
    dataReducers,
    formsReducers,
    modalReducers,
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
