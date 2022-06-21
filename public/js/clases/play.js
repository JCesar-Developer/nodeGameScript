//const claseTableroDeJuego = require ('./TableroJuego');
window.addEventListener("load", play, false);

let partida;
let tableroDeJuego;
let jugadores = new Array();
//FUNCIÓN PRINCIPAL
function play(){

    //Si play => Se inicia una nueva partida.
    partida = new Partida();

    //si (nºJugadores > 1) entonces 
    //Instanciar jugadores dentro de partidas:
    let jugador1 = new Jugador('01', 'Julito');
    //console.log("El Jugador ",jugador1.getNickName()," de color ",jugador1.getColor()," se ha unido a la partida.");
    jugador1.setColor("blue");
    jugadores.push(jugador1)

    let jugador2 = new Jugador('02', 'Kevin');
    //console.log(`El Jugador "${dueño}" de color "${color}" se ha unido a la partida.`);
    jugador2.setColor("red");
    jugadores.push(jugador2)

    let jugador3 = new Jugador('03', 'Sergio');
    //console.log(`El Jugador "${dueño}" de color "${color}" se ha unido a la partida.`);
    jugador3.setColor("green");
    jugadores.push(jugador3)

    let jugador4 = new Jugador('04', 'Manu');
    //console.log(`El Jugador "${dueño}" de color "${color}" se ha unido a la partida.`);
    jugador4.setColor("orange");
    jugadores.push(jugador4)

        /*NOTA: {Los setColor se encuentran aislados del método constructor, 
                porqué se tiene la intención que en un futuro, el jugador,
                pueda escoger su propio color} */

    //Se pasa los jugadores al metodo asignarCasillaInicio
    partida.asignarJugadoresCasillaInicio(jugadores);
    //partida.nuevaRonda();
    console.log("-------------------------------");
    
}

let iJugador = 0;
function capturarSiSePuede(x_Pulsado, y_Pulsado){
    //Declaración de variables
    let jugadorActual;
    let sePuede = false; 
    let j = 0;

    //FALTA: 
    //Tras iniciar partida:
    //1. INICIAR CRONÓMETRO
    //2. SOMBREAR CASILLAS ALHEDAÑAS QUE SE PUEDEN PINTAR.
    //Tras capturar:
    //1. SUMAR PUNTOS AL SCORE.
    //2. CAMBIAR DE TURNO AL JUGADOR POR SOCKET.IO
    //3. NOTIFICAR CAMBIOS CON SOCKET.IO

    //LO MÁS IMPORTANTE: ¿CAMBIAR TURNO CON SOCKET.IO?

    //Logica de Captura
    jugadorActual = jugadores[iJugador];
    while(j < jugadorActual.getCasillas().length){
        let casillaPrueba = jugadorActual.getCasillas()[j];
        let x_Actual = casillaPrueba.getCoordenadaX();
        let y_Actual = casillaPrueba.getCoordenadaY();

        let dif_x = x_Pulsado - x_Actual;
        let dif_y = y_Pulsado - y_Actual;

        /* --- ANÁLISIS DE LA MATRIZ ---
        [x-1,y+1]   [x,y+1]     [x+1,y+1]
        [x-1,y]     [x,y]       [x+1,y]
        [x-1,y-1]   [x,y-1]     [x+1,y-1]
        -------------------------------*/ 

        if(dif_x == 1 && dif_y == -1)   sePuede = true;
        if(dif_x == 0 && dif_y == -1)   sePuede = true;
        if(dif_x == -1 && dif_y == -1)  sePuede = true;

        if(dif_x == 1 && dif_y == 0)    sePuede = true;
        if(dif_x == 0 && dif_y == 0)    sePuede = true;
        if(dif_x == -1 && dif_y == 0)   sePuede = true;
        
        if(dif_x == 1 && dif_y == 1)    sePuede = true;
        if(dif_x == 0 && dif_y == 1)    sePuede = true;
        if(dif_x == -1 && dif_y == 1)   sePuede = true;
        j++;
    }
    if (sePuede) {
        jugadorActual.capturaCasilla(x_Pulsado, y_Pulsado);
        iJugador++;
        if(iJugador == 4) iJugador = 0;
    }
}

//MÁS COSAS:
/*
 * BOTÓN DE PLAY
 * POP UP QUE INDIQUÉ GANADOR DEL JUEGO
 */
