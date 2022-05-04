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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL2ZpcmViYXNlU2VuZFVzZXJEYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvOS43LjAvZmlyZWJhc2UtYXV0aC5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIHNldERvYyxcclxuICBkb2MsXHJcbiAgZ2V0RmlyZXN0b3JlLFxyXG4gIHNlcnZlclRpbWVzdGFtcCxcclxufSBmcm9tIFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjcuMC9maXJlYmFzZS1maXJlc3RvcmUuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmaXJlYmFzZVNlbmRVc2VyRGF0ZXMgPSAoYXBwLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG4gIChhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aC5jdXJyZW50VXNlcjtcclxuICAgICAgYXdhaXQgc2V0RG9jKFxyXG4gICAgICAgIGRvYyhkYiwgXCJ1c2VyQWNjb3VudHNcIiwgdXNlci51aWQpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgICAgICBhY3RpdmVUYXJpZmY6IG51bGwsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IHNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXJnZTogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJmaXJlc3RvcmVcIiArIGVyci5jb2RlKTtcclxuICAgIH1cclxuICB9KSgpO1xyXG59O1xyXG4iXSwiZmlsZSI6Im1vZHVsZXMvZmlyZWJhc2VTZW5kVXNlckRhdGVzLmpzIn0=
