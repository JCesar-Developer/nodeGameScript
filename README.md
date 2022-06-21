Arquitectura:

- PASO 1: EXPORTAMOS PAQUETES DE TERCEROS:
        PRIORITARIAS:
        -------------
        -> init         :
        -> express      :
        -> mongoose     :
        -> @Happi/joi   :

        SECUNDARIAS:
        ------------
        -> nodemon 		:
        -> uuid			: Crea id's únicas.

-----------------------------------------------------------------------------------------------------------------------
- PASO 2: DEFINIMOS LA ARQUITECTURA (Creamos paquetes):
  -----------------------------------------------------
        - [CONFIG]      -> ¿?¿?¿?¿? 
        - [CONTROLLERS] -> Aquí irán la API-RESTFull (Los métodos CRUD + REST).
        - [MODELS]      -> Aquí irán los modelos de los registros (basados en los objetos) con sus validaciones.
        - [PUBLIC]      -> También llamada VIEWS, aquí irán los ficheros estáticos
        - [ROUTES]      -> Aquí irán todos los GET de los elementos estáticos (HTML/CSS/IMG).
        - [.gitignore]  -> 
        - [app.js]      -> 

- PASO 2.1: [APP.JS]
    Arquitectura recomendada:
    -------------------------
    // DEPENDENCIAS DE TERCEROS
    // DEPENDENCIAS PROPIAS
    // CONECCIÓN A LA BBDD
        -> con MONGOOSE : Se crea la conección con la BBDD. ( mongoose.conect() )
    // MIDDLEWARES
    // EXPORTACIÓN Y UTILIZACIÓN DE RUTAS
    // CONECCIÓN CLIENTE SERVIDOR
        -> con EXPRESS  : Se crea la conección en entre el servidor y el cliente. ( app.listen() )

- PASO 2.2: [PUBLIC]
    - Creación de los ficheros estáticos [HTML, CSS, IMG, JAVASCRIPT]


- PASO 2.3: DEFINICIÓN DE [ROUTES]

- PASO 2.4: CREACIÓN DE LOS [MODELS].
    -> Se aprovechan los modelos para agregar las validaciones a nivel de la lógica de negocio.

- PASO 2.5: CREACIÓN DE LOS MÉTODOS [CONTROLER] (API-REST-FULL)
    - CREATE    : (REST-Post)   + (CRUD-Create) + (Validate)
    - READ      : (REST-Get)    + (CRUD-Read)
    - UPDATE    : (REST-Put)    + (CRUD-Update) + (Validate)
    - DELETE    : (REST-Delete) + (CRUD-Delete)

        -> Se testean los CRUD con POSTMAN + MONGODB (Roboto || Compass).
-----------------------------------------------------------------------------------------------------------------------

- PASO 3: 

    

