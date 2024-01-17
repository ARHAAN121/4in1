
var firebaseConfig = {
      apiKey: "AIzaSyDCf_Givm8LP9KrNyVlFNLNGq25IdqUXu0",
      authDomain: "kwitter-d4586.firebaseapp.com",
      databaseURL: "https://kwitter-d4586-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4586",
      storageBucket: "kwitter-d4586.appspot.com",
      messagingSenderId: "732632556986",
      appId: "1:732632556986:web:501fc74bbf1eaeb9c82983",
      measurementId: "G-W4L8LKF5D3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" Welcome  "+user_name+" ! ";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

        purpuse:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){

  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout (){

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}