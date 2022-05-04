export const getHeaderAPosition = () => {
  const headerEl = document.getElementById("header");
  const mainEl = document.getElementById("main");

  if (window.matchMedia("(max-width: 767px)").matches) {
    return parseInt(mainEl.offsetHeight, 10) - headerEl.offsetHeight / 1.2;
  } else {
    return 5;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2dldEhlYWRlckFQb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0SGVhZGVyQVBvc2l0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG5cclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KG1haW5FbC5vZmZzZXRIZWlnaHQsIDEwKSAtIGhlYWRlckVsLm9mZnNldEhlaWdodCAvIDEuMjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDU7XHJcbiAgfVxyXG59O1xyXG4iXSwiZmlsZSI6Im1vZHVsZXMvZ2V0SGVhZGVyQVBvc2l0aW9uLmpzIn0=
