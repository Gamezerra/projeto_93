function addroom().getElementById.localstorage
window.location(kwitterpage.html)
//Início do código 
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
});});}
getData();
//Fim do código

function rediectToRoomName()
Window.locate