import { getHeaderAPosition } from "./getHeaderAPosition.js";

export const scrollOnClick = () => {
  const headerEl = document.getElementById("header");
  const linkEls = document.querySelectorAll(`*[data-scroll]`);

  const checkScroll = () => {
    let activatingValue = getHeaderAPosition();

    if (scrollY <= activatingValue) {
      headerEl.classList.remove("active-scroll");
    } else {
      headerEl.classList.add("active-scroll");
    }
  };

  linkEls.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      headerEl.classList.remove("active-menu");
      document.body.style.overflow = "initial";
      checkScroll();

      const scrollRef = el.getAttribute("data-scroll");
      const scrollElement = document.querySelector(scrollRef);

      const scrollValue =
        scrollElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerEl.offsetHeight;

      window.scrollTo({
        top: scrollValue,
        behavior: "smooth",
      });
    });
  });
};
