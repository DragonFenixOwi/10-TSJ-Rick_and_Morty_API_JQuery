/*
    ------------------------------
        Asincronismo
    ------------------------------
*/

/*
    -------------------------------------------------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: owi
    --------------------------------------------------------------------------------------------------
*/



/*
    ---------------------------------------------
                    Rick and Morty
    ----------------------------------------------
*/


/*
    ---------------------------------------------
        Desarrollo: 
            - Se realiza un CALLBACK ayudado de una libreria externa (JQuery) para hacer los "request" 
            a una API. 

            - Se inserta una libreria externa (index.html)
                - JQuery ultima versión - Libreria externa minified (codigo comprimido)
                - JQuery es el que hace un "request" (rescata los "datos" o "información" de la API, 
                y trae esos "datos" a este código, para ser utilizado
            
            - Se utiliza una API - Declaración de variables
                - API - forma de conectar dos aplicaciones (codigo o software), para intercambiar datos
                - Contiene datos y deja que se acceda a ellos.
                - API_link: https://rickandmortyapi.com/api/ . Se divide en tres 
                    - "characters" : "https://rickandmortyapi.com/api/character",
                    - "locations" : "https://rickandmortyapi.com/api/location",
                    - "episodes" : "https://rickandmortyapi.com/api/episode"

            - Se crea 2 CALLBACK
                -CALLBACK 1 :  DESCRIPCION_PERSONAJE_CHARACTER 
                    - Imprime en la pantalla del navegador "Nombre" y "especie".
                    - Con una Sentenciai if, que se ejecuta solo si el objeto pertenece al "id=1""
                -CALLBACK 2 :  DESCRIPCION_PERSONAJE_LOCATION
                    - Imprime en la pantalla del navegador "lugar o locación".
                    - Con una Sentenciai if, que se ejecuta solo si el objeto pertenece al"id=1""
                
                
            - 2 LLamada a la libreria JQuery y a su función get 
                - LLamada inicial :  Link_Objeto_constante
                    - pertenece al objeto con "id =1"
                - Segunda LLamada :  Link_Objeto
                    - pertenece al objeto con "id" introducido por teclado
    ------------------------------------------------------------------------------------------------------
*/


/*
    ---------------------
        VARIABLES
    ---------------------
*/

// variable creada para guardar el valor introducido por teclado
var valor_id=0;

/* Bases para acceder a la API*/

// la API_URL siempre es constante
const API_URL = "https://rickandmortyapi.com/api/";

// "id = 1". Plantilla inicial que se muestra en pantalla
const CHARACTER_INICIAL = "character/1";
const LOCATION_INICIAL = "location/1";

// "id" introducido a través de "prompt"
const CHARACTER = "character/:id";
const LOCATION = "location/:id";


/* Bases para Solicitar el contenido de la API*/ 

// "id" que representa al objeto
const Identificador_Objeto_API = "/:id"; 
// Indicamos que la información es externa
const OPCIONES = {crossDomain: true};    





/*
    ---------------------
        FUNCIONES
    ---------------------
*/

/*
    CALLBACK
        - Se crea una constante denominada "DESCRIPCION_PERSONAJE"
        - Esa constante es una funcion 
*/


// CALLBACK 1 - Se imprime el "nombre y la especie"

/*
    - Se crea una "constante"  DESCRIPCION_PERSONAJE_CHARACTER
    - Esta constante es una "función" con un parametro "personaje"
*/
const DESCRIPCION_PERSONAJE_CHARACTER = function (personaje)
    {
        //Entre en el "if" solo si el "id=1". Identifica el texto inicial
            if ('Rick Sanchez' === personaje.name )
                {
                    document.write(`# Texto inicial: ${"<br><br>"}`);
                }
        
        /* 
            - Imprime en el navegador "nombre y especie"
            - Una vez ejecutado ".get" correctamente, con document.write, guardamos toda esa información que se recogio con "get"
            - No quiero que ejecutes esta función, sin antes haber recogido la información  
        */
            document.write(` - Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, `);
    };



// CALLBACK 2  - Se imprime el "lugar o locación"
/*
    - Se crea una "constante"  DESCRIPCION_PERSONAJE_LOCATION 
    - Esta constante es una "función" con un parametro "personaje_2"
*/

const DESCRIPCION_PERSONAJE_LOCATION = function (personaje_2)
    {           
        // Imprime en el navegador "lugar o locación"
            document.write(`soy originario de ${personaje_2.name} ${"<br><br>"}`);
            
        //Entre en el "if" solo si el "id=1" . Identfica el id introducido por teclado
            if ('Earth (C-137)' === personaje_2.name )
                {
                    document.write(` # Texto introducido por teclado, con valor del "id = ${valor_id}" es: ${"<br><br>"}`);
                }
            
    };







/* SEGUNDA LLAMADA - "id " introducido por teclado*/

// Funcion que contiene la dirección de la URL de la API e identificacion "id" introducido por teclado
function Link_Objeto (id)
    {
        /* Pertence al "Nombre" y la "especie" */

        /*
            - Se crea una constante "URL_1" - tipo string
            - Se crea la dirección de la URL_1 para llamar a todo "código o objeto" de la API
            - ${API_URL}https://swapi.dev/api/ ${CHARACTER} (people/:id) completamos el link, 
                - https://swapi.dev/api/  people/:id
                - por eso es importante que no haya espacio entre los "${}"
                - Con ".replace", se reemplaza ":id" escrito en "const PERSONAJES_URL" por el valor introducido por teclado por ejemplo "10" 
                - "people/10" - es un objeto
        */
            const URL_1 = `${API_URL}${CHARACTER.replace(":id",id)}`; //sin espacios los dos singos del dolar.


        /*
            - "$" hace referencia a JQuery 
            - ".get" nos trae la información 
            - Descripción de los argumentos dentro del parentesis del "get"
                -get(¿de donde la  tengo que traer?, Tipo de información(externa), Aqui vamos a insertar el callback 
            - Mientras "get()" no funcione, no se va a lanzar 
            - la funcion "DESCRIPCION_PERSONAJE_CHARACTER"  que actua es un CALLBACK
                */
            $.get(URL_1, OPCIONES, DESCRIPCION_PERSONAJE_CHARACTER);
        

        
        /* Pertence al "lugar o locación" */
        
        /*
            - URL_2 = constante del tipo string que representa el link del API 
                donde se encuentra el objeto, que contiene 
                    -API_URL = constante del tipo string declarado en "variables globales" que representa 
                    el link principal del API donde se encuentra el objeto
                    - LOCATION = constante del tipo string declarado en "variables globales" que representa 
                    el link que devuelve el lugar de origen o locación del "id" introducido por teclado
                    - ".reaplce" remplaza ":id" (variables globales) = id (1 o introducido por teclado)
                - 
        */
            const URL_2 = `${API_URL}${LOCATION.replace(":id",id)}`; 
            $.get(URL_2, OPCIONES, DESCRIPCION_PERSONAJE_LOCATION);
    }



/* LLAMADA INICIAL - "id = 1" */

// Funcion que imprime el texto inicial con "id=1"
function Link_Objeto_constante ()
    {
        //variable local
            var id = 1;
        //Descripción similar en la función "link_objeto" de la "segunda llamada"    
            const URL_1 = `${API_URL}${CHARACTER_INICIAL}`; 
            $.get(URL_1, OPCIONES, DESCRIPCION_PERSONAJE_CHARACTER);
            const URL = `${API_URL}${LOCATION_INICIAL}`; 
            $.get(URL, OPCIONES, DESCRIPCION_PERSONAJE_LOCATION);
        
        // DESCRIPCION_PERSONAJE_LOCATION es una funcion que se convierte en un argumento.
        
    }




/*
    -------------------------
        FUNCIÓN PRINCIPAL
    -------------------------
*/


function introducir_datos ()
    {
        // Función que siempre imprime el "id = 1"
        Link_Objeto_constante();

        // Valor "id" que es introducido por teclado
        valor_id = prompt(`Introducir id:`);

        // llamada a la función, para enviar el argumento "id" introducido por teclado
        Link_Objeto(valor_id);  
    }


// Llamada de la función
introducir_datos();
    

