// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCQVN-oRSToU6-UDZ1OQtp7TnJlhRfrDYw",
      authDomain: "kwitter-90901.firebaseapp.com",
      databaseURL: "https://kwitter-90901-default-rtdb.firebaseio.com",
      projectId: "kwitter-90901",
      storageBucket: "kwitter-90901.appspot.com",
      messagingSenderId: "30409950990",
      appId: "1:30409950990:web:4095919d7281a29547395f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,like: 0     
}); 
document.getElementById("msg").value=" ";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}