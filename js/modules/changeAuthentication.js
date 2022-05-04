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
    checkboxEl.setAttribute("required", "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2NoYW5nZUF1dGhlbnRpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmViYXNlQ3JlYXRlQWNjb3VudCB9IGZyb20gXCIuL2ZpcmViYXNlQ3JlYXRlQWNjb3VudC5qc1wiO1xyXG5pbXBvcnQgeyBmaXJlYmFzZUVudHJ5IH0gZnJvbSBcIi4vZmlyZWJhc2VFbnRyeS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUF1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhlbnRpY2F0aW9uXCIpO1xyXG4gIGNvbnN0IHJlY29yZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoZW50aWNhdGlvbl9fcmVjb3JkXCIpO1xyXG4gIGNvbnN0IGVudHJ5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhlbnRpY2F0aW9uX19lbnRyeVwiKTtcclxuICBjb25zdCBidXR0b25TdWJtaXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aGVudGljYXRpb25fX3N1Ym1pdFwiKTtcclxuICBjb25zdCBhZ3JlZW1lbnRUZXh0RWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hdXRoZW50aWNhdGlvbl9fdGV4dFwiKTtcclxuICBjb25zdCBjaGVja2JveEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgY29uc3QgdGV4dEVycm9yRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhlbnRpY2F0aW9uX190ZXh0LWVycm9yXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWNvcmRDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF1dGhlbnRpY2F0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZShcImF1dGhvcml6YXRpb25cIik7XHJcbiAgICBhdXRoZW50aWNhdGlvbkVsLmNsYXNzTGlzdC5hZGQoXCJyZWdpc3RyYXRpb25cIik7XHJcbiAgICBidXR0b25TdWJtaXRFbC50ZXh0Q29udGVudCA9IFwi0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXCI7XHJcbiAgICBhZ3JlZW1lbnRUZXh0RWxzWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBhZ3JlZW1lbnRUZXh0RWxzWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNoZWNrYm94RWwuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgY2hlY2tib3hFbC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcclxuICAgIHRleHRFcnJvckVsLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAvLyBBY2NvdW50IGNyZWF0ZVxyXG4gICAgZmlyZWJhc2VDcmVhdGVBY2NvdW50KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW50cnlDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF1dGhlbnRpY2F0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZShcInJlZ2lzdHJhdGlvblwiKTtcclxuICAgIGF1dGhlbnRpY2F0aW9uRWwuY2xhc3NMaXN0LmFkZChcImF1dGhvcml6YXRpb25cIik7XHJcbiAgICBidXR0b25TdWJtaXRFbC50ZXh0Q29udGVudCA9IFwi0JLQvtC50YLQuFwiO1xyXG4gICAgYWdyZWVtZW50VGV4dEVsc1sxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgYWdyZWVtZW50VGV4dEVsc1swXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjaGVja2JveEVsLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGNoZWNrYm94RWwucmVtb3ZlQXR0cmlidXRlKFwicmVxdWlyZWRcIik7XHJcbiAgICB0ZXh0RXJyb3JFbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgLy8gQWNjb3VudCBzaWduIGluXHJcbiAgICBmaXJlYmFzZUVudHJ5KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVjb3JkRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJlY29yZENsaWNrKTtcclxuICByZWNvcmRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmVjb3JkQ2xpY2spO1xyXG5cclxuICBlbnRyeUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVFbnRyeUNsaWNrKTtcclxuICBlbnRyeUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVFbnRyeUNsaWNrKTtcclxufTtcclxuIl0sImZpbGUiOiJtb2R1bGVzL2NoYW5nZUF1dGhlbnRpY2F0aW9uLmpzIn0=
