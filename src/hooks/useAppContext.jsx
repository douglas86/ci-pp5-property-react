import { useContext } from "react";
import { Context } from "../context/store";

/**
 * Retrieves the application context.
 *
 * @returns {Object} The application context object.
 */
const useAppContext = () => {
  return useContext(Context);
};

export default useAppContext;
