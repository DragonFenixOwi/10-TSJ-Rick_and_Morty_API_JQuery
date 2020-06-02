/*
    ------------------------------
        Asincronismo
    ------------------------------
*/

/*
    ---------------------------------------------------------------------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: owi
        API_link: https://rickandmortyapi.com/api/

        Ha través de esta API, escribir en pantalla del navegador la frase plantilla:
            - "Hola mi nombre es 'Rick Sanchez', mi especie es 'Human', soy originario de 'Earth (C-137) - location' "

            Que el usuario interesado a través de un 'prompt' pueda pedir diferentes id's.
    -----------------------------------------------------------------------------------------------------------------------
*/



/*
    ---------------------------------------------
                    Rick and Morty
    ----------------------------------------------
*/


/*
    -----------------------------------------------------------------------------------------------------------------
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
        - Se crea una "constante" denominada "DESCRIPCION_PERSONAJE"
        - Esa constante es una funcion. Que se convierte en CALLBACK
*/

// CALLBACK 1 - Se imprime el "nombre y la especie"
const DESCRIPCION_PERSONAJE_CHARACTER = function (personaje)
    {
        //Entre en el "if" solo si el "id=1". Identifica el texto inicial
            if ('Rick Sanchez' === personaje.name )
                {
                    document.write(`# Texto inicial: ${"<br><br>"}`);
                }
        
        // Imprime en el navegador "nombre y especie"
            document.write(` - Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, `);
    };


// CALLBACK 2  - Se imprime el "lugar o locación"
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
        // Pertence al "Nombre" y la "especie"
            const URL_1 = `${API_URL}${CHARACTER.replace(":id",id)}`; 
            $.get(URL_1, OPCIONES, DESCRIPCION_PERSONAJE_CHARACTER);
        
        // Pertence al "lugar o locación"
            const URL_2 = `${API_URL}${LOCATION.replace(":id",id)}`; 
            $.get(URL_2, OPCIONES, DESCRIPCION_PERSONAJE_LOCATION);
    }


/* LLAMADA INICIAL - "id = 1" */

// Funcion que imprime el texto inicial con "id=1"
function Link_Objeto_constante ()
    {
        var id = 1;
        const URL_1 = `${API_URL}${CHARACTER_INICIAL}`; 
        $.get(URL_1, OPCIONES, DESCRIPCION_PERSONAJE_CHARACTER);
        const URL = `${API_URL}${LOCATION_INICIAL}`; 
        $.get(URL, OPCIONES, DESCRIPCION_PERSONAJE_LOCATION);
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
    



