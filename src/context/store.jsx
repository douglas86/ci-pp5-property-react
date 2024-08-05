import { createContext, useEffect, useMemo, useReducer } from "react";
import { rootReducers } from "./rootReducers";

/**
 * Represents the initial state of the application.
 * @typedef {Object} initialState
 * @property {Object} userReducers - Holds user-related state data.
 * @property {Object} dataReducers - Holds data-related state data.
 * @property {Object} modalReducers - Holds modal-related state data.
 * @property {Object} stateReducers - Holds state-related state data.
 *
 * @property {Object|null} userReducers.user - Represents the user data.
 * @property {Object|null} userReducers.access - Represents the user access data.
 *
 * @property {boolean} dataReducers.showAlert - Represents whether to show an alert or not.
 *
 * @property {boolean} modalReducers.templateModal - Represents whether the template modal is open or not.
 * @property {Object|null} modalReducers.formComponent - Represents the form component.
 *
 * @property {boolean} stateReducers.MenuOpen - Represents whether the menu is open or not.
 */
// const initialState = {
//   userReducers: {
//     user: null,
//     access: null,
//     access_expiration: null,
//   },
//   dataReducers: {
//     showAlert: false,
//   },
//   modalReducers: {
//     templateModal: false,
//     formComponent: null,
//   },
//   stateReducers: {
//     MenuOpen: false,
//   },
// };

const initialState = JSON.parse(sessionStorage.getItem("appState")) || {
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
// export const Context = createContext(initialState);
export const StateContext = createContext(initialState);
export const DispatchContext = createContext(initialState);

/**
 * Initializes the application state with the given initial state.
 *
 * @param {Object} initialState - The initial state of the application.
 * @param {Object} initialState.userReducers - The user reducers.
 * @param {Object} initialState.dataReducers - The data reducers.
 * @param {Object} initialState.modalReducers - The modal reducers.
 * @param {Object} initialState.stateReducers - The state reducers.
 * @returns {Object} - The initialized application state.
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
 * Represents a React component that provides a context to its children.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The children components to be wrapped inside the provider.
 * @returns {ReactNode} The rendered component.
 */
// export const Provider = ({ children }) => {
//   const [state, dispatch] = useReducer(rootReducers, initialState, init);
//
//   const contextValue = useMemo(() => {
//     return { state, dispatch };
//   }, [state, dispatch]);
//
//   return <Context.Provider value={contextValue}>{children}</Context.Provider>;
// };
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducers, initialState, init);

  useEffect(() => {
    sessionStorage.setItem("appState", JSON.stringify(state));
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
