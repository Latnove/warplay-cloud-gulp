export const checkScroll = (activatingValue) => {
  const headerEl = document.getElementById("header");
  const scrollY = window.scrollY;

  if (scrollY <= activatingValue) {
    headerEl.classList.remove("active-scroll");
  } else {
    headerEl.classList.add("active-scroll");
  }
};
