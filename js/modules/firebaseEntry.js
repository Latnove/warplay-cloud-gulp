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
