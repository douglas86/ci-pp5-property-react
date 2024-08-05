// import { useContext } from "react";
// import { Context } from "../context/store";
//
// /**
//  * Retrieves the application context.
//  *
//  * @returns {Object} The application context object.
//  */
// const useAppContext = () => {
//   return useContext(Context);
// };
//
// export default useAppContext;

import { useContext } from "react";
import { DispatchContext, StateContext } from "../context/store";

export const useAppState = () => {
  const context = useContext(StateContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within useAppState");
  }
  return context.state;
};

export const useAppDispatch = () => {
  const context = useContext(DispatchContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within useAppState");
  }
  return context.dispatch;
};
