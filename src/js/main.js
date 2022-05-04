import { checkScroll } from "./modules/checkScroll.js";
import { clickBurger } from "./modules/clickBurger.js";
import { getHeaderAPosition } from "./modules/getHeaderAPosition.js";
import { scrollOnClick } from "./modules/scrollOnClick.js";
import { setBurgerPosition } from "./modules/setBurgerPosition.js";

setBurgerPosition();
scrollOnClick();
clickBurger();

document.addEventListener("DOMContentLoaded", () => {
  setBurgerPosition();
  checkScroll(getHeaderAPosition());
});

window.addEventListener("scroll", () => {
  checkScroll(getHeaderAPosition());
});
