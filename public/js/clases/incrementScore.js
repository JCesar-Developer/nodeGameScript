function incrementButtonScore() {

    let number  = document.getElementById('score-incrementable');
    let value   = number.innerHTML;

    ++value;
    
    //1. COMO EJECUTO EL MÉTODO PUT SIN UN FORMULARIO -> XHR
    //2. CÓMO LE INDICO QUE ESOS DATOS ACTUALIZADOS, SE TIENEN QUE AGREGAR
    //   A ESE USUARIO QUE ESTÁ EN SESIÓN
    //2. UNA VEZ INICIADA SESSIÓN, ¿como solicito los datos mi usuario?

    //PASO 1. TRAER AL USUARIO
    //console.log(nombre);
    //- API INTERNA
        // .then( valor => res.json({ valor }))
        // .catch( err => res.status(400).json({ err }));

    document.getElementById('score-incrementable').innerHTML = value;

}

function incrementButtonSalas() {

    let number  = document.getElementById('salas-incrementable');
    let value   = number.innerHTML;

    ++value;

    document.getElementById('salas-incrementable').innerHTML = value;

}