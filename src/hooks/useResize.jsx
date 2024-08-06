import { useEffect, useState } from "react";

/**
 * A custom React hook that returns the width of the window and updates it whenever the window is resized.
 *
 * @returns {number} The width of the window.
 */
const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return width;
};

export default useResize;
