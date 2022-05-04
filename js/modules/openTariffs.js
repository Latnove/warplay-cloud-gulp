import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export const openTariffs = (app) => {
  const authenticationEl = document.querySelector(".authentication__container");
  const tariffsModal = document.querySelector(".authentication__tariffs");
  const titleEl = tariffsModal.querySelector(".title");
  const cardList = tariffsModal.querySelectorAll(".cards__item");
  const reloadEl = tariffsModal.querySelector(
    "close-button.authentication__close-button"
  );

  const db = getFirestore(app);
  const auth = getAuth(app);

  const activatedTariffs = () => {
    authenticationEl.style.display = "none";
    tariffsModal.style.display = "flex";
    titleEl.textContent = "Доступные подписки";
  };

  const getActiveUserTariff = async () => {
    const user = await auth.currentUser;
    const docRef = doc(db, "userAccounts", user.uid);
    const docResult = await getDoc(docRef);
    return docResult.data().activeTariff;
  };

  const getCardTariffValue = (element) => {
    const array = element.className.split(" ");
    let i = 0;

    while (i < array.length) {
      if (array[i].includes("cards__item--")) {
        const str = array[i].replace("cards__item--", "");
        return str;
      }

      i++;
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();

    if (tariffsModal.classList.contains("active-subscription")) return;

    try {
      const user = await auth.currentUser;
      const elementTariff = getCardTariffValue(event.target.parentElement);

      await setDoc(
        doc(db, "userAccounts", user.uid),
        {
          activeTariff: elementTariff,
        },
        { merge: true }
      );

      const activeTariff = await getActiveUserTariff();
      removeInactiveTariff(activeTariff);

      titleEl.textContent = "Ваша активная подписка";
    } catch (err) {
      console.log(err);
    }
  };

  const removeInactiveTariff = (activeTariff) => {
    cardList.forEach((el) => {
      const cardButtonEl = el.querySelector(".cards__button");

      if (
        activeTariff !== null &&
        !el.classList.contains(`cards__item--${activeTariff}`)
      ) {
        tariffsModal.classList.add("active-subscription");
        titleEl.textContent = "Ваша активная подписка";
        el.remove();
      } else {
        cardButtonEl.addEventListener("click", handleClick);
      }

      if (el.className.includes(activeTariff) && activeTariff !== null) {
        cardButtonEl.textContent = "Активна";
      }
    });
  };

  (async function () {
    const activeTariff = await getActiveUserTariff();

    activatedTariffs();
    removeInactiveTariff(activeTariff);
  })();

  reloadEl.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.reload();
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL29wZW5UYXJpZmZzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjcuMC9maXJlYmFzZS1hdXRoLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZG9jLFxyXG4gIGdldERvYyxcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgc2V0RG9jLFxyXG59IGZyb20gXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzkuNy4wL2ZpcmViYXNlLWZpcmVzdG9yZS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5UYXJpZmZzID0gKGFwcCkgPT4ge1xyXG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhlbnRpY2F0aW9uX19jb250YWluZXJcIik7XHJcbiAgY29uc3QgdGFyaWZmc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoZW50aWNhdGlvbl9fdGFyaWZmc1wiKTtcclxuICBjb25zdCB0aXRsZUVsID0gdGFyaWZmc01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XHJcbiAgY29uc3QgY2FyZExpc3QgPSB0YXJpZmZzTW9kYWwucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkc19faXRlbVwiKTtcclxuICBjb25zdCByZWxvYWRFbCA9IHRhcmlmZnNNb2RhbC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCJjbG9zZS1idXR0b24uYXV0aGVudGljYXRpb25fX2Nsb3NlLWJ1dHRvblwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cclxuICBjb25zdCBhY3RpdmF0ZWRUYXJpZmZzID0gKCkgPT4ge1xyXG4gICAgYXV0aGVudGljYXRpb25FbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB0YXJpZmZzTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdGl0bGVFbC50ZXh0Q29udGVudCA9IFwi0JTQvtGB0YLRg9C/0L3Ri9C1INC/0L7QtNC/0LjRgdC60LhcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBY3RpdmVVc2VyVGFyaWZmID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGguY3VycmVudFVzZXI7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwidXNlckFjY291bnRzXCIsIHVzZXIudWlkKTtcclxuICAgIGNvbnN0IGRvY1Jlc3VsdCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG4gICAgcmV0dXJuIGRvY1Jlc3VsdC5kYXRhKCkuYWN0aXZlVGFyaWZmO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENhcmRUYXJpZmZWYWx1ZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICB3aGlsZSAoaSA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICBpZiAoYXJyYXlbaV0uaW5jbHVkZXMoXCJjYXJkc19faXRlbS0tXCIpKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gYXJyYXlbaV0ucmVwbGFjZShcImNhcmRzX19pdGVtLS1cIiwgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh0YXJpZmZzTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXN1YnNjcmlwdGlvblwiKSkgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgICBjb25zdCBlbGVtZW50VGFyaWZmID0gZ2V0Q2FyZFRhcmlmZlZhbHVlKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuXHJcbiAgICAgIGF3YWl0IHNldERvYyhcclxuICAgICAgICBkb2MoZGIsIFwidXNlckFjY291bnRzXCIsIHVzZXIudWlkKSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhY3RpdmVUYXJpZmY6IGVsZW1lbnRUYXJpZmYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG1lcmdlOiB0cnVlIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGFjdGl2ZVRhcmlmZiA9IGF3YWl0IGdldEFjdGl2ZVVzZXJUYXJpZmYoKTtcclxuICAgICAgcmVtb3ZlSW5hY3RpdmVUYXJpZmYoYWN0aXZlVGFyaWZmKTtcclxuXHJcbiAgICAgIHRpdGxlRWwudGV4dENvbnRlbnQgPSBcItCS0LDRiNCwINCw0LrRgtC40LLQvdCw0Y8g0L/QvtC00L/QuNGB0LrQsFwiO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlSW5hY3RpdmVUYXJpZmYgPSAoYWN0aXZlVGFyaWZmKSA9PiB7XHJcbiAgICBjYXJkTGlzdC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkQnV0dG9uRWwgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19idXR0b25cIik7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYWN0aXZlVGFyaWZmICE9PSBudWxsICYmXHJcbiAgICAgICAgIWVsLmNsYXNzTGlzdC5jb250YWlucyhgY2FyZHNfX2l0ZW0tLSR7YWN0aXZlVGFyaWZmfWApXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhcmlmZnNNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXN1YnNjcmlwdGlvblwiKTtcclxuICAgICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gXCLQktCw0YjQsCDQsNC60YLQuNCy0L3QsNGPINC/0L7QtNC/0LjRgdC60LBcIjtcclxuICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXJkQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVsLmNsYXNzTmFtZS5pbmNsdWRlcyhhY3RpdmVUYXJpZmYpICYmIGFjdGl2ZVRhcmlmZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNhcmRCdXR0b25FbC50ZXh0Q29udGVudCA9IFwi0JDQutGC0LjQstC90LBcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZVRhcmlmZiA9IGF3YWl0IGdldEFjdGl2ZVVzZXJUYXJpZmYoKTtcclxuXHJcbiAgICBhY3RpdmF0ZWRUYXJpZmZzKCk7XHJcbiAgICByZW1vdmVJbmFjdGl2ZVRhcmlmZihhY3RpdmVUYXJpZmYpO1xyXG4gIH0pKCk7XHJcblxyXG4gIHJlbG9hZEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfSk7XHJcbn07XHJcbiJdLCJmaWxlIjoibW9kdWxlcy9vcGVuVGFyaWZmcy5qcyJ9
