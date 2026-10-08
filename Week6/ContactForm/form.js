// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";    
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

  const app = initializeApp(firebaseConfig);
  const db= getDatabase(app);

  console.log(db);

function saveContact(name, email, message) {

    const usersRef = ref(db, 'users');

    const newUserRef = push(usersRef);

    set(newUserRef, {

        name: name,
        email: email,
        message: message

    })
    .then(() => {

        console.log("User added successfully");

        document.getElementById('contact-result').innerHTML =
            "Name: " + name + "<br>" +
            "Email: " + email + "<br>" +
             "Message: " + message;

    })
    .catch((error) => {

        console.error("Error adding user:", error);

    });
}

window.saveContact = saveContact;