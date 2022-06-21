class Casilla{
    /* ------ CONSTRUCTOR ------ */ 
    constructor(coordenadaX, coordenadaY){
        this._celdaHTML     = document.getElementById("c"+coordenadaX+coordenadaY);
        this._coordenadaX   = coordenadaX;
        this._coordenadaY   = coordenadaY;
        this._dueño         = null;      
        this._ocupado       = false;   
    }

    /* --- GETTERS & SETTERS --- */
    get getCeldaHTML(){
        return this._celdaHTML;
    }
    
    getCoordenadaX(){
        return this._coordenadaX;
    }
    getCoordenadaY(){
        return this._coordenadaY;
    }

    setDueño(nuevoDueño){
        this._dueño = nuevoDueño;
    }

    getOcupado(){
        return this._ocupado;
    }
    setOcupado(boolano){
        this._ocupado = boolano;
    }

    /* ---- MÉTODOS DE CLASE ---- */
    ocuparCasilla(color, dueño){
        //console.log(`El Jugador "${dueño}" de color "${color}" se ha unido a la partida.`);
        this.getCeldaHTML.style.background = color;
        this.setDueño(dueño);
        this.setOcupado(true);
    }
}

//module.exports.Casilla = Casilla;