import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { getFirebaseConfig } from "./getFirebaseConfig.js";
import { firebaseSendUserDates } from "./firebaseSendUserDates.js";
import { openTariffs } from "./openTariffs.js";

export const firebaseCreateAccount = () => {
  const emailEl = document.querySelector(
    ".authentication__form > input[type='text']"
  );
  const passwordEl = document.querySelector(
    ".authentication__form > input[type='password']"
  );
  const checkboxEl = document.querySelector(
    ".authentication__form input[type='checkbox']"
  );
  const formEl = document.querySelector(".authentication__form");
  const textErrorEl = document.querySelector(".authentication__text-error");

  const app = getFirebaseConfig();
  const auth = getAuth(app);

  const resetForm = () => {
    emailEl.value = "";
    passwordEl.value = "";
    checkboxEl.checked = false;
  };

  const createAccount = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await firebaseSendUserDates(app, email, password);

      textErrorEl.textContent = "Аккаунт успешно зарегистрирован!";
      resetForm();

      setTimeout(() => {
        openTariffs(app);
      }, 1000);
    } catch (err) {
      console.log(err.code);

      if (err.code == "auth/invalid-email") {
        textErrorEl.textContent = "Ошибка в написании вашей почты";
      } else if (err.code == "auth/network-request-failed") {
        textErrorEl.textContent = "Форма заполнена некоректно";
      } else if (err.code == "auth/email-already-in-use") {
        textErrorEl.textContent = "Аккаунт с такой почтой уже существует";
      } else {
        textErrorEl.textContent = "Слишком много запросов, попробуйте позже";
      }
    }
  };

  formEl.onsubmit = () => {
    event.preventDefault();
    textErrorEl.textContent = "";
    createAccount(emailEl.value, passwordEl.value);
    return false;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2ZpcmViYXNlQ3JlYXRlQWNjb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG59IGZyb20gXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzkuNy4wL2ZpcmViYXNlLWF1dGguanNcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZWJhc2VDb25maWcgfSBmcm9tIFwiLi9nZXRGaXJlYmFzZUNvbmZpZy5qc1wiO1xyXG5pbXBvcnQgeyBmaXJlYmFzZVNlbmRVc2VyRGF0ZXMgfSBmcm9tIFwiLi9maXJlYmFzZVNlbmRVc2VyRGF0ZXMuanNcIjtcclxuaW1wb3J0IHsgb3BlblRhcmlmZnMgfSBmcm9tIFwiLi9vcGVuVGFyaWZmcy5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQ3JlYXRlQWNjb3VudCA9ICgpID0+IHtcclxuICBjb25zdCBlbWFpbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmF1dGhlbnRpY2F0aW9uX19mb3JtID4gaW5wdXRbdHlwZT0ndGV4dCddXCJcclxuICApO1xyXG4gIGNvbnN0IHBhc3N3b3JkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuYXV0aGVudGljYXRpb25fX2Zvcm0gPiBpbnB1dFt0eXBlPSdwYXNzd29yZCddXCJcclxuICApO1xyXG4gIGNvbnN0IGNoZWNrYm94RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuYXV0aGVudGljYXRpb25fX2Zvcm0gaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXHJcbiAgKTtcclxuICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhlbnRpY2F0aW9uX19mb3JtXCIpO1xyXG4gIGNvbnN0IHRleHRFcnJvckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoZW50aWNhdGlvbl9fdGV4dC1lcnJvclwiKTtcclxuXHJcbiAgY29uc3QgYXBwID0gZ2V0RmlyZWJhc2VDb25maWcoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cclxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBlbWFpbEVsLnZhbHVlID0gXCJcIjtcclxuICAgIHBhc3N3b3JkRWwudmFsdWUgPSBcIlwiO1xyXG4gICAgY2hlY2tib3hFbC5jaGVja2VkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlQWNjb3VudCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICBhd2FpdCBmaXJlYmFzZVNlbmRVc2VyRGF0ZXMoYXBwLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG5cclxuICAgICAgdGV4dEVycm9yRWwudGV4dENvbnRlbnQgPSBcItCQ0LrQutCw0YPQvdGCINGD0YHQv9C10YjQvdC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSFcIjtcclxuICAgICAgcmVzZXRGb3JtKCk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvcGVuVGFyaWZmcyhhcHApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIuY29kZSk7XHJcblxyXG4gICAgICBpZiAoZXJyLmNvZGUgPT0gXCJhdXRoL2ludmFsaWQtZW1haWxcIikge1xyXG4gICAgICAgIHRleHRFcnJvckVsLnRleHRDb250ZW50ID0gXCLQntGI0LjQsdC60LAg0LIg0L3QsNC/0LjRgdCw0L3QuNC4INCy0LDRiNC10Lkg0L/QvtGH0YLRi1wiO1xyXG4gICAgICB9IGVsc2UgaWYgKGVyci5jb2RlID09IFwiYXV0aC9uZXR3b3JrLXJlcXVlc3QtZmFpbGVkXCIpIHtcclxuICAgICAgICB0ZXh0RXJyb3JFbC50ZXh0Q29udGVudCA9IFwi0KTQvtGA0LzQsCDQt9Cw0L/QvtC70L3QtdC90LAg0L3QtdC60L7RgNC10LrRgtC90L5cIjtcclxuICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIikge1xyXG4gICAgICAgIHRleHRFcnJvckVsLnRleHRDb250ZW50ID0gXCLQkNC60LrQsNGD0L3RgiDRgSDRgtCw0LrQvtC5INC/0L7Rh9GC0L7QuSDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZXh0RXJyb3JFbC50ZXh0Q29udGVudCA9IFwi0KHQu9C40YjQutC+0Lwg0LzQvdC+0LPQviDQt9Cw0L/RgNC+0YHQvtCyLCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQttC1XCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmb3JtRWwub25zdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGV4dEVycm9yRWwudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgY3JlYXRlQWNjb3VudChlbWFpbEVsLnZhbHVlLCBwYXNzd29yZEVsLnZhbHVlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG59O1xyXG4iXSwiZmlsZSI6Im1vZHVsZXMvZmlyZWJhc2VDcmVhdGVBY2NvdW50LmpzIn0=
