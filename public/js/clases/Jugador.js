class Jugador {
        
    /* --- MÉTODO CONSTRUCTOR --- */ 
    constructor(idJugador, nickName) {
        this._idJugador = idJugador;
        this._nickName  = nickName;
        this._avatar    = null;
        this._color     = null;
        this._casillas  = new Array();
    }

    /* --- GETTERS & SETTERS --- */
    getNickName(){
        return this._nickName;
    }

    getColor(){
        return this._color;
    }
    setColor(valor){
        this._color = valor;
    }

    getCasillas(){
        return this._casillas;
    }

    /* --- METODOS DE CLASE --- */
    asignarCasillaInicio(tableroDeJuego){
        //Decide coordenadas de inicio
        let x = Math.round(Math.random()*19);
        let y = Math.round(Math.random()*19);

        //Declaración de variables 
        let casillaInicio   = tableroDeJuego[x][y];
        let colorJugador    = this.getColor();
        let nickNameJugador = this.getNickName();
        
        //Si la casilla; no está ocupada -> el jugador ocupa la Casilla
        if(!casillaInicio.getOcupado()){
            casillaInicio.ocuparCasilla(colorJugador, nickNameJugador);
            this._casillas.push(casillaInicio);
            console.log(casillaInicio);
        } else {
            this.asignarCasillaInicio(tableroDeJuego);
        }
    }

    capturaCasilla(x, y){
        //¿Qué es lo que quiero? -> Quiero que el jugador 1 pueda pintar todas las casillas.
        let casilla         = tableroDeJuego[x][y];
        let colorJugador    = this.getColor();
        let nickNameJugador = this.getNickName();

        //Si la casilla; no está ocupada -> el jugador captura la Casilla
        if(!casilla.getOcupado()){
            casilla.ocuparCasilla(colorJugador, nickNameJugador);
            this._casillas.push(casilla);
            console.log(`El jugador ${this._nickName} ha capturado la casilla: (${x},${y})`)
        } else {
            alert("No se puede capturar está casilla");
        }
    }

    partidasGanas() {}
    PartidasJugadas() {}
}



//module.exports.Jugador = Jugador;