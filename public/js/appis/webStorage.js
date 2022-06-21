/* --- API WEB STORAGE --- */

var i = 0;
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let jugador = JSON.stringify(`jugador${i++}`);
  localStorage.setItem(jugador, form.nombre.value);
  
  alert(
    "!BIENVENIDO JUGADOR! ENCANTADO DE CONTAR CONTIGO, QUE EMPIEZE EL JUEGO " +
      localStorage.getItem(jugador)
  );
});

form.addEventListener("reset", (e) => {
  e.preventDefault();
  localStorage.clear();
  i = 0;
});
