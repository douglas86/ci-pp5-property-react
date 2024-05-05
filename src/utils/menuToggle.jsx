import { barsIcon } from "../components/atom/Icons/barsIcon";
import { xMarkIcon } from "../components/atom/Icons/xmarkIcon";

export const menuToggle = (menuState) => (menuState ? xMarkIcon : barsIcon);
