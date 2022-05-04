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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3Njcm9sbE9uQ2xpY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SGVhZGVyQVBvc2l0aW9uIH0gZnJvbSBcIi4vZ2V0SGVhZGVyQVBvc2l0aW9uLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2Nyb2xsT25DbGljayA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGxpbmtFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAqW2RhdGEtc2Nyb2xsXWApO1xyXG5cclxuICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcclxuICAgIGxldCBhY3RpdmF0aW5nVmFsdWUgPSBnZXRIZWFkZXJBUG9zaXRpb24oKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsWSA8PSBhY3RpdmF0aW5nVmFsdWUpIHtcclxuICAgICAgaGVhZGVyRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNjcm9sbFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsaW5rRWxzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGhlYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbWVudVwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICBjaGVja1Njcm9sbCgpO1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsUmVmID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGxcIik7XHJcbiAgICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNjcm9sbFJlZik7XHJcblxyXG4gICAgICBjb25zdCBzY3JvbGxWYWx1ZSA9XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xyXG4gICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCAtXHJcbiAgICAgICAgaGVhZGVyRWwub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IHNjcm9sbFZhbHVlLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwiZmlsZSI6Im1vZHVsZXMvc2Nyb2xsT25DbGljay5qcyJ9
