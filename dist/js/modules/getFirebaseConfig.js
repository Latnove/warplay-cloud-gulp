import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

export const getFirebaseConfig = () => {
  const app = initializeApp({
    // apiKey: process.env.APP_AK,
    // authDomain: process.env.APP_AD,
    // projectId: process.env.APP_PI,
    // storageBucket: process.env.APP_SB,
    // messagingSenderId: process.env.APP_MS,
    // appId: process.env.APP_AI,

    apiKey: "AIzaSyDcO8sDDlqdDkLZoYQ0R9D88pXgdmQTkhw",
    authDomain: "warplay-cloud.firebaseapp.com",
    projectId: "warplay-cloud",
    storageBucket: "warplay-cloud.appspot.com",
    messagingSenderId: "847668577558",
    appId: "1:847668577558:web:24bd137be7153ffff13c37",
  });

  return app;
};
