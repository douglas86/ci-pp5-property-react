import { fontawesomeIcon } from "../components/atom/Icons";

export const menuToggle = (menuState) =>
  menuState
    ? fontawesomeIcon("fa-solid fa-xmark")
    : fontawesomeIcon("fa-solid fa-bars");
