export const getHeaderAPosition = () => {
  const headerEl = document.getElementById("header");
  const mainEl = document.getElementById("main");

  if (window.matchMedia("(max-width: 767px)").matches) {
    return parseInt(mainEl.offsetHeight, 10) - headerEl.offsetHeight / 1.2;
  } else {
    return 5;
  }
};
