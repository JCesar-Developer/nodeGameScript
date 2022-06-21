var socket = io.connect("http://localhost:3000/", {
    "forceNew" : true
});

socket.on("messages", function(data) {
    alert(data);
})

/* chat WEBSOCKET*/
let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

btn.addEventListener("click", function () {
  socket.emit("chat:message", {
    username: username.value,
    message: message.value,
  });
});

socket.on("chat:message", function (data) {
    actions.innerHTML = "";
  output.innerHTML = (data.username + ": "+ data.message); 
});

message.addEventListener("keypress", function () {
    console.log(username.value);
    socket.emit("chat:typing", username.value);
  });

socket.on("chat:typing", function (data) {
  actions.innerHTML = ("El usuario: " + data + " esta escribiendo un mensaje");;
});
