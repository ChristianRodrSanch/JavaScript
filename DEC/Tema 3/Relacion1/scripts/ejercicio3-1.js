
// function check_edad(edad) { // me ha faltado pasar por parametro para que me pille edad y no se peude poner el tipo de dato tienes que controlarlo desde dentro del codigo usando por ejemplo Parse
    
//     if(edad >= 18 && edad <= 100 ) {
//         console.log ("la edad entra dentro");

//     }else {
//         console.log ("La edad no cumple los requisitos");
//         let redirigir;
//         redirigir = window.open("http://www.google.es","","height=400,width=800");
//     }


// }

function check_edad() {

        let edad = parseInt(arguments[0]);
        if(arguments.length==2){
            if(edad >18){
                console.log("Se pasan 2 parametros");
            }
            else if (arguments.length == 1) {
                console.long("Se pasa 1 parametro");
            } else {
            console.log("Parametros no validos");
        }
}

check_edad(22); // no funciona correctamente 



function leer_edad() {

let edad = parseInt(document.getElementById('edad').value);
check_edad(edad);
console.log("La edad es: " + edad);

}