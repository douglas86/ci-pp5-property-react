import { useEffect } from "react";

import useAppContext from "./useAppContext";

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
  }, []);
};

export default useResize;
