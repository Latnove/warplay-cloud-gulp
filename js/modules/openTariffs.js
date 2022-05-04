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
