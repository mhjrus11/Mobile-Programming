
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getDatabase, ref, set, get, update, remove } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";    
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

  function writeUserData(userId, firstname, lastname, address, email, phone, hobby, gender, dob, country) {
    
 set(ref(db, 'users/' + userId), {
      fname: firstname,      
      lname: lastname,
      address: address,
      email: email,
      phone: phone,
      hobby: hobby,
      gender: gender,
      dob: dob,
      country: country,
    });
  }

  
  window.writeUserData = writeUserData;
  writeUserData(1, "Rushil", "Maharjan", "Kathmandu", "rushil@example.com", "9800000000", "Reading", "Male", "2006-10-09", "Nepal");
  writeUserData(2, "Sita", "Shrestha", "Lalitpur", "sita@example.com", "9800000001", "Swimming", "Female", "2007-05-15", "Nepal");
  writeUserData(3, "Ram", "Thapa", "Bhaktapur", "ram@example.com", "9800000002", "Gaming", "Male", "2006-08-22", "Nepal");
  writeUserData(4, "Gita", "Koirala", "Pokhara", "gita@example.com", "9800000003", "Dancing", "Female", "2007-12-30", "Nepal");
  writeUserData(5, "Suman", "Adhikari", "Biratnagar", "suman@example.com", "9800000004", "Cooking", "Female", "2007-03-18", "Nepal");

  function readUser(id){

    const userRef = ref(db, 'users/' + id)

    get(userRef).then((snapshot)=>{
        if(snapshot.exists()){
            console.log(snapshot.val());
        }
        else{
            console.log("User not found");
        }
    })
}

window.readUser = readUser;
  



