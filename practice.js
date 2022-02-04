const firebaseConfig = {
    apiKey: "AIzaSyDUK-hyQV0qkouMy8N-BwuTA5v-a_FAW24",
    authDomain: "kwitter-8f234.firebaseapp.com",
    databaseURL: "https://kwitter-8f234-default-rtdb.firebaseio.com",
    projectId: "kwitter-8f234",
    storageBucket: "kwitter-8f234.appspot.com",
    messagingSenderId: "911483134074",
    appId: "1:911483134074:web:ea9f9012dc33bb7c629bc3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose:"welcome to kwitter"
     });
}