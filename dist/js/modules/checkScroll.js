export const checkScroll = (activatingValue) => {
  const headerEl = document.getElementById("header");
  const scrollY = window.scrollY;

  if (scrollY <= activatingValue) {
    headerEl.classList.remove("active-scroll");
  } else {
    headerEl.classList.add("active-scroll");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrU2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjaGVja1Njcm9sbCA9IChhY3RpdmF0aW5nVmFsdWUpID0+IHtcclxuICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgaWYgKHNjcm9sbFkgPD0gYWN0aXZhdGluZ1ZhbHVlKSB7XHJcbiAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNjcm9sbFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zY3JvbGxcIik7XHJcbiAgfVxyXG59O1xyXG4iXSwiZmlsZSI6Im1vZHVsZXMvY2hlY2tTY3JvbGwuanMifQ==
