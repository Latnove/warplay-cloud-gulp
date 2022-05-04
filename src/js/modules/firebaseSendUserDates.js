import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import {
  setDoc,
  doc,
  getFirestore,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export const firebaseSendUserDates = (app, email, password) => {
  const db = getFirestore(app);
  const auth = getAuth(app);

  (async function () {
    try {
      const user = await auth.currentUser;
      await setDoc(
        doc(db, "userAccounts", user.uid),
        {
          email: email,
          password: password,
          uid: user.uid,
          activeTariff: null,
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (err) {
      console.log("firestore" + err.code);
    }
  })();
};
