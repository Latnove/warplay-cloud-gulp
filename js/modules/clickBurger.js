export const clickBurger = () => {
  const headerEl = document.getElementById("header");
  const burgerEl = document.querySelector(".header__burger");
  let headerHaveScroll = false;

  burgerEl.addEventListener("click", () => {
    headerEl.classList.toggle("active-menu");

    if (headerEl.classList.contains("active-scroll")) {
      headerHaveScroll = true;
    }

    if (headerEl.classList.contains("active-menu")) {
      document.body.style.overflow = "hidden";
      headerEl.classList.remove("active-scroll");
    } else {
      document.body.style.overflow = "initial";
      if (headerHaveScroll) headerEl.classList.add("active-scroll");
      headerHaveScroll = false;
    }
  });
};
