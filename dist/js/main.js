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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoZWNrU2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9jaGVja1Njcm9sbC5qc1wiO1xyXG5pbXBvcnQgeyBjbGlja0J1cmdlciB9IGZyb20gXCIuL21vZHVsZXMvY2xpY2tCdXJnZXIuanNcIjtcclxuaW1wb3J0IHsgZ2V0SGVhZGVyQVBvc2l0aW9uIH0gZnJvbSBcIi4vbW9kdWxlcy9nZXRIZWFkZXJBUG9zaXRpb24uanNcIjtcclxuaW1wb3J0IHsgc2Nyb2xsT25DbGljayB9IGZyb20gXCIuL21vZHVsZXMvc2Nyb2xsT25DbGljay5qc1wiO1xyXG5pbXBvcnQgeyBzZXRCdXJnZXJQb3NpdGlvbiB9IGZyb20gXCIuL21vZHVsZXMvc2V0QnVyZ2VyUG9zaXRpb24uanNcIjtcclxuXHJcbnNldEJ1cmdlclBvc2l0aW9uKCk7XHJcbnNjcm9sbE9uQ2xpY2soKTtcclxuY2xpY2tCdXJnZXIoKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBzZXRCdXJnZXJQb3NpdGlvbigpO1xyXG4gIGNoZWNrU2Nyb2xsKGdldEhlYWRlckFQb3NpdGlvbigpKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgY2hlY2tTY3JvbGwoZ2V0SGVhZGVyQVBvc2l0aW9uKCkpO1xyXG59KTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
