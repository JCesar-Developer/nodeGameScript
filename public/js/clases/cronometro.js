class Cronometro {
    constructor() {
        this._segundosInicio = 10;
        this._segundos;
    }

    /* --- GETTERS & SETTERS --- */
    get segundos() {
        return this._segundos;
    }

    set segundos(segundos) {
        this._segundos = segundos;
    }

    /* --- METODOS DE CLASE --- */
    inicializaCronometro() {
        this._segundos = this._segundosInicio; 
        this.cuentaAtrasCronometro();
    }

    cuentaAtrasCronometro() {
        //Capturamos el <div/> del casillero de los segundos y lo imprimimos por pantalla
        const seconds = document.getElementById("seconds");
        console.log(seconds.innerHTML = this._segundosInicio);
        
        let contador = this._segundos;
        let i = 0;

        let inicio = window.setInterval(() => {
            console.log(seconds.innerHTML = --contador);
            
            if(contador == 0){
                clearInterval(inicio); 
                console.log("se acabado tu turno")
                clearInterval(inicio);
                //this.inicializaCronometro();
            }
        }, 1000);
    }
}

/*------------------------------------------------------------------*/
  /*
  resetTime(inicio){
    clearInterval(inicio); 
  }
  */

  // reiniciaCronometro() {
  //   console.log("Se acabo el tiempo! Cambio de Turno");
  //   clearInterval();
  //   this.inicializaCronometro();
  //   //cambiar turno jugador
  // }

//     constructor(/*enum-SOLO PERMITIDO CON TYPESCRIPT*/){
//         this.enum=this.enum;
//     }
//     /*DEFINIMOS GETTERS & SETTERS */
//     set enum(valor){
//         this.enum=valor;
//     }
//     get enum(){
//         return this.enum;
//     }
//     /*DEFINIMOS METODOS */
//     retrocederTiempor(){

//     }
//     reiniciarCronometro(){

//     }

// }

//Cuenta atras V1.
//     console.log(this._segundos);
//     seconds.innerHTML = this._segundos; //POR AQUÍ HAY QUE METER EL SET INTERVAL
//     this._segundos--;

//   if (this._segundos == 0) {
//     alert("Se acabo el tiempo! Cambio de Turno");
//     clearInterval();
//
