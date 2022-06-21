//const casilla = require ('./Casilla');

class TableroJuego{
    
    /* --- MÉTODO CONSTRUCTOR --- */ 
    constructor(fila, columna){
        this._fila = fila;
        this._columna = columna;
        this._tableroDeJuego;
    };

    /* --- GETTERS & SETTERS --- */
    get getFila(){
        return this._fila;
    }
    set setFila(valor){
        this._fila=valor;
    }

    get getColumna(){
        return this._columna;
    }
    set setColumna(valor){
        this._columna=valor;
    }
    
    get getTableroDeJuego(){
        return this._tableroDeJuego;
    }
    
    /* --- METODOS DE CLASE --- */
    imprimeResultado(){  
        console.log(`Has creado un nuevo tablero de ${this._fila} filas + ${this._columna} columnas`);
    }

    /**
     * Inicializa el tablero con todas sus casillas nulas y vacias.
     */
    crea_tableroDeJuego(){
        this.defineDimension_tableroDeJuego(this._tableroDeJuego);
        this.instanciarCasillas_tableroDeJuego(this._tableroDeJuego);
        this.imprimeResultado();
    }

    /**
     * Define el tamaño del tablero, haciendolo una Matriz bidimensional de filas y columnas.
     * La intención de esté módulo, es que más adelante se pueda escoger el tamaño del tablero.
     * @param {*} tableroDeJuego 
     */
    defineDimension_tableroDeJuego(tableroDeJuego){
        //Inicializamos las filas
        tableroDeJuego = new Array(this._fila);
        //Agregamos a cada fila sus columna
        for (var i = 0; i < this._fila; i++){
            tableroDeJuego[i] = new Array(this._columna);
        }
        //Asignamos la matriz a '_tableroDeJuego'
        this._tableroDeJuego = tableroDeJuego;
    }

    /**
     * Asigna una casilla vacia (de la clase 'Casilla.js') a cada 
     * una de las posiciones de la Matriz del tablero.
     * @param {*} tableroDeJuego 
     */
    instanciarCasillas_tableroDeJuego(tableroDeJuego){       
        for (var i = 0; i < this._fila; i++){
            for (var j = 0; j < this._columna; j++){
                //Asignar a cada casilla un <td> del HTML
                let casillaVacia = new Casilla(i, j);
                tableroDeJuego[i][j] = casillaVacia;
            }
        }
    }
}

//module.exports.TableroJuego = TableroJuego;
