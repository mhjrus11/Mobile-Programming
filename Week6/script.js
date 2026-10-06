
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";    
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDIyS6A8zkgN43masrcIVObwLaclSJlPWs",
    authDomain: "mobile-app-programming-e4642.firebaseapp.com",
    projectId: "mobile-app-programming-e4642",
    storageBucket: "mobile-app-programming-e4642.firebasestorage.app",
    messagingSenderId: "522034768729",
    appId: "1:522034768729:web:68daa5d985820fa1f7ba48"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db= getDatabase(app);

  console.log(db);
