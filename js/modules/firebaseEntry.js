import { getFirebaseConfig } from "./getFirebaseConfig.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { openTariffs } from "./openTariffs.js";

export const firebaseEntry = () => {
  const emailEl = document.querySelector(
    ".authentication__form > input[type='text']"
  );
  const passwordEl = document.querySelector(
    ".authentication__form > input[type='password']"
  );
  const checkboxEl = document.querySelector(
    ".authentication__form input[type='checkbox']"
  );
  const textErrorEl = document.querySelector(".authentication__text-error");
  const formEl = document.querySelector(".authentication__form");

  const app = getFirebaseConfig();
  const auth = getAuth(app);

  const resetForm = () => {
    emailEl.value = "";
    passwordEl.value = "";
    checkboxEl.checked = false;
  };

  const signInAccount = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      resetForm();
      textErrorEl.textContent = "Вы успешно вошли в аккаунт.";
      setTimeout(() => {
        openTariffs();
      }, 1000);
    } catch (err) {
      console.log(err.code);

      if (err.code == "auth/wrong-password") {
        textErrorEl.textContent = "Пароль введен неверно.";
      } else if (err.code == "auth/user-not-found") {
        textErrorEl.textContent = "Такого аккаунта не существует.";
      } else {
        textErrorEl.textContent = "Слишком много запросов, попробуйте позже";
      }
    }
  };

  formEl.onsubmit = () => {
    event.preventDefault();
    textErrorEl.textContent = "";
    signInAccount(emailEl.value, passwordEl.value);
    return false;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2ZpcmViYXNlRW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RmlyZWJhc2VDb25maWcgfSBmcm9tIFwiLi9nZXRGaXJlYmFzZUNvbmZpZy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbn0gZnJvbSBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvOS43LjAvZmlyZWJhc2UtYXV0aC5qc1wiO1xyXG5pbXBvcnQgeyBvcGVuVGFyaWZmcyB9IGZyb20gXCIuL29wZW5UYXJpZmZzLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlyZWJhc2VFbnRyeSA9ICgpID0+IHtcclxuICBjb25zdCBlbWFpbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmF1dGhlbnRpY2F0aW9uX19mb3JtID4gaW5wdXRbdHlwZT0ndGV4dCddXCJcclxuICApO1xyXG4gIGNvbnN0IHBhc3N3b3JkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuYXV0aGVudGljYXRpb25fX2Zvcm0gPiBpbnB1dFt0eXBlPSdwYXNzd29yZCddXCJcclxuICApO1xyXG4gIGNvbnN0IGNoZWNrYm94RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuYXV0aGVudGljYXRpb25fX2Zvcm0gaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXHJcbiAgKTtcclxuICBjb25zdCB0ZXh0RXJyb3JFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aGVudGljYXRpb25fX3RleHQtZXJyb3JcIik7XHJcbiAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoZW50aWNhdGlvbl9fZm9ybVwiKTtcclxuXHJcbiAgY29uc3QgYXBwID0gZ2V0RmlyZWJhc2VDb25maWcoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cclxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBlbWFpbEVsLnZhbHVlID0gXCJcIjtcclxuICAgIHBhc3N3b3JkRWwudmFsdWUgPSBcIlwiO1xyXG4gICAgY2hlY2tib3hFbC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnbkluQWNjb3VudCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICB0ZXh0RXJyb3JFbC50ZXh0Q29udGVudCA9IFwi0JLRiyDRg9GB0L/QtdGI0L3QviDQstC+0YjQu9C4INCyINCw0LrQutCw0YPQvdGCLlwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvcGVuVGFyaWZmcygpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIuY29kZSk7XHJcblxyXG4gICAgICBpZiAoZXJyLmNvZGUgPT0gXCJhdXRoL3dyb25nLXBhc3N3b3JkXCIpIHtcclxuICAgICAgICB0ZXh0RXJyb3JFbC50ZXh0Q29udGVudCA9IFwi0J/QsNGA0L7Qu9GMINCy0LLQtdC00LXQvSDQvdC10LLQtdGA0L3Qvi5cIjtcclxuICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PSBcImF1dGgvdXNlci1ub3QtZm91bmRcIikge1xyXG4gICAgICAgIHRleHRFcnJvckVsLnRleHRDb250ZW50ID0gXCLQotCw0LrQvtCz0L4g0LDQutC60LDRg9C90YLQsCDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCLlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRleHRFcnJvckVsLnRleHRDb250ZW50ID0gXCLQodC70LjRiNC60L7QvCDQvNC90L7Qs9C+INC30LDQv9GA0L7RgdC+0LIsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9C20LVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZvcm1FbC5vbnN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0ZXh0RXJyb3JFbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBzaWduSW5BY2NvdW50KGVtYWlsRWwudmFsdWUsIHBhc3N3b3JkRWwudmFsdWUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbn07XHJcbiJdLCJmaWxlIjoibW9kdWxlcy9maXJlYmFzZUVudHJ5LmpzIn0=
