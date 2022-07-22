// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC6xPWstNNN3P06fNPFPXdHaE8F755j1tU",
      authDomain: "kwitter-9a176.firebaseapp.com",
      databaseURL: "https://kwitter-9a176-default-rtdb.firebaseio.com",
      projectId: "kwitter-9a176",
      storageBucket: "kwitter-9a176.appspot.com",
      messagingSenderId: "213528051994",
      appId: "1:213528051994:web:64c4cca8081ffd4451eca3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name =localStorage.getItem("user_name");
    document.getElementById ("user_name").innerHTML="welcome" + user_name + "!";

    function addRoom (){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      } ) ;
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
 } 

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room name- "+Room_names);
     row = "<div class = 'room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
}