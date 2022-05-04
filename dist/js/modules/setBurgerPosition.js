import { getHeaderAPosition } from "./getHeaderAPosition.js";

export const setBurgerPosition = () => {
  const mainEl = document.getElementById("main");
  const burgerEl = document.querySelector(".header__burger");
  let activatingValue = 5;

  activatingValue = getHeaderAPosition();
  burgerEl.style.top = "0px";
  if (activatingValue > 5) burgerEl.style.top = mainEl.offsetHeight + "px";

  window.addEventListener("resize", setBurgerPosition);
};
