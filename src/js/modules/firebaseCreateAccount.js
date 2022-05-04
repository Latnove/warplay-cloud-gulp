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
