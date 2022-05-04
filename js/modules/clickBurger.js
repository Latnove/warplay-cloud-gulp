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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2NsaWNrQnVyZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjbGlja0J1cmdlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGJ1cmdlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1cmdlclwiKTtcclxuICBsZXQgaGVhZGVySGF2ZVNjcm9sbCA9IGZhbHNlO1xyXG5cclxuICBidXJnZXJFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaGVhZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZS1tZW51XCIpO1xyXG5cclxuICAgIGlmIChoZWFkZXJFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2Nyb2xsXCIpKSB7XHJcbiAgICAgIGhlYWRlckhhdmVTY3JvbGwgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoZWFkZXJFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtbWVudVwiKSkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgaGVhZGVyRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zY3JvbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgIGlmIChoZWFkZXJIYXZlU2Nyb2xsKSBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNjcm9sbFwiKTtcclxuICAgICAgaGVhZGVySGF2ZVNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iXSwiZmlsZSI6Im1vZHVsZXMvY2xpY2tCdXJnZXIuanMifQ==
