class turno {
  constructor() {
    this._turno;
    
  }

  turnoStart() { // Inserta numero de turno que uno quiera(Falta por acabar)
    let inicioTurno =1;
    let turnos = document.getElementById("turnoPartida");
    turnos.innerHTML = inicioTurno;
    autoplay();
    this._turno++;
  }



//   nuevoTurno(){
//     console.log(this._turno);
//     let turnos = document.getElementById("turnoPartida");
//     turnos.innerHTML = this._turno;
//     autoplay();
//     this._turno++;
//   }
}
