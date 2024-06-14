import { fontawesomeIcon } from "../components/atom/Icons";

/**
 * Toggles open and close of a hamburger menu on smaller devices
 * @param menuState
 * @returns {*}
 */
export const menuToggle = (menuState) =>
  menuState
    ? fontawesomeIcon("fa-solid fa-xmark")
    : fontawesomeIcon("fa-solid fa-bars");
