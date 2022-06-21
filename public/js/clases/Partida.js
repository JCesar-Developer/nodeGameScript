class Partida{
        
    /* --- MÉTODO CONSTRUCTOR --- */ 
    constructor(){
        //this.idTablero = tablero;                 
        this._tableroDeJuego = this.nuevoTableroDeJuego();
        this._jugadores      = null;       
        this._cronometro     = null;               
        this._tableroScore   = null     
        this._chat           = null;
        this._ronda          = 0;
        this._ganador        = false;                                    
        //this.botonesVarios = botonesVarios;         
    }

    /* --- GETTERS & SETTERS --- */
    getTableroDeJuego(){
        return this._tableroDeJuego;
    }
    setJugadores(jugadores){
        this._jugadores = jugadores;
    }

    /* --- METODOS DE CLASE --- */
    autoAsignarID(){}
    nuevoTableroDeJuego(){
        //Se crea un nuevo tablero de juego de 20casillas x 20casillas.
        let nuevoTableroDeJuego = new TableroJuego(20, 20); 
        nuevoTableroDeJuego.crea_tableroDeJuego();
        tableroDeJuego = nuevoTableroDeJuego.getTableroDeJuego;
        return tableroDeJuego;
    }

    asignarJugadoresCasillaInicio(jugadores){
        let i = 0;
        while(i < jugadores.length){
            jugadores[i].asignarCasillaInicio(this._tableroDeJuego);
            i++;
        }
        this.setJugadores(jugadores);
    }
    
    //nuevaRonda();
        //Si (!hayGanador) entonces
            //jugadores = [jugador1, jugador2, jugador3, jugador3]
            //let jugadorActual;
            //let i = 0;  
            //mientras (i < 4){
                //jugadorActual[0];
                //jugadorActual  
                    //-> capturaCasilla() {Evento.onclick} -> i++;
            //finMientras
            //reiniciarRonda();
        //finEntonces.
    //
    nuevaRonda(){
        let jugadorActual;
        let cronometro = new Cronometro();

        if (!this._ganador){
            jugadorActual = this._jugadores[0];
            console.log(jugadorActual);
            jugadorActual.capturaCasilla();

            /*
            let i = 0;
            cronometro.inicializaCronometro();
            while(i < this._jugadores.length){
                jugadorActual = this._jugadores[i];
                console.log(jugadorActual);
                i++;
            }
            */
        }
        //else (Juego terminado);
    }

    mostrarGanador(){}
    mostrarJugadores(){}
    almacenarScore(){}
}