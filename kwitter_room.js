// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBe5aGeaqsQAtRDLkOrIZrdYf2NJWZac0Q",
      authDomain: "lets-chat-c21b6.firebaseapp.com",
      projectId: "lets-chat-c21b6",
      storageBucket: "lets-chat-c21b6.appspot.com",
      messagingSenderId: "1078702309003",
      appId: "1:1078702309003:web:2165426506a265fa2cde8e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
