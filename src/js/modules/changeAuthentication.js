import { firebaseCreateAccount } from "./firebaseCreateAccount.js";
import { firebaseEntry } from "./firebaseEntry.js";

export const changeAuthentication = () => {
  const authenticationEl = document.querySelector(".authentication");
  const recordEl = document.querySelector(".authentication__record");
  const entryEl = document.querySelector(".authentication__entry");
  const buttonSubmitEl = document.querySelector(".authentication__submit");
  const agreementTextEls = document.querySelectorAll(".authentication__text");
  const checkboxEl = document.querySelector('input[type="checkbox"]');
  const textErrorEl = document.querySelector(".authentication__text-error");

  const handleRecordClick = (event) => {
    event.preventDefault();
    authenticationEl.classList.remove("authorization");
    authenticationEl.classList.add("registration");
    buttonSubmitEl.textContent = "Зарегистрироваться";
    agreementTextEls[0].style.display = "block";
    agreementTextEls[1].style.display = "none";
    checkboxEl.checked = false;
    checkboxEl.getAttribute("required");
    textErrorEl.textContent = "";

    // Account create
    firebaseCreateAccount();
  };

  const handleEntryClick = (event) => {
    event.preventDefault();
    authenticationEl.classList.remove("registration");
    authenticationEl.classList.add("authorization");
    buttonSubmitEl.textContent = "Войти";
    agreementTextEls[1].style.display = "block";
    agreementTextEls[0].style.display = "none";
    checkboxEl.checked = false;
    checkboxEl.removeAttribute("required");
    textErrorEl.textContent = "";

    // Account sign in
    firebaseEntry();
  };

  recordEl.removeEventListener("click", handleRecordClick);
  recordEl.addEventListener("click", handleRecordClick);

  entryEl.removeEventListener("click", handleEntryClick);
  entryEl.addEventListener("click", handleEntryClick);
};
