import { createContext, useEffect, useMemo, useReducer } from "react";
import { rootReducers } from "./rootReducers";

/**
 * Represents the initial state for the application
 * @type {any|{modalReducers: {}, dataReducers: {}, userReducers: {}, stateReducers: {}}}
 */
const initialState = JSON.parse(localStorage.getItem("appState")) || {
  userReducers: {},
  dataReducers: {},
  modalReducers: {},
  stateReducers: {},
};

/**
 * Creates a context object with the given initial state.
 *
 * @param {Object} initialState - The initial state for the context object.
 * @returns {Object} - The created context object.
 */
export const StateContext = createContext(initialState);
export const DispatchContext = createContext(initialState);

/**
 * Initializes state for this app
 * @param initialState
 * @returns {{modalReducers, dataReducers, userReducers, stateReducers}}
 */
const init = (initialState) => {
  const { userReducers, dataReducers } = initialState;
  const { stateReducers, modalReducers } = initialState;

  return {
    userReducers,
    dataReducers,
    modalReducers,
    stateReducers,
  };
};

/**
 * Handles state throughout this app
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducers, initialState, init);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  const stateValue = useMemo(() => ({ state }), [state]);
  const dispatchValue = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    <StateContext.Provider value={stateValue}>
      <DispatchContext.Provider value={dispatchValue}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
