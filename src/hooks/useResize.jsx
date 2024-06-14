import { useEffect } from "react";

import useAppContext from "./useAppContext";

/**
 * Custom hook to measure the width of the window
 */
const useResize = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "SET WINDOW WIDTH", payload: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
};

export default useResize;
