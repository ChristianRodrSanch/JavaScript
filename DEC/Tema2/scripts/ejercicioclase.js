/*
Un programa que va a tener 3 funciones cuando se llame a funcion 1 saldra por pantalla soy funcion1 y los otros igual pero con funcion 2 y 3
va a salir un menu que tenga para poder elegir la funcion 1/2/3 y el 4 para salir
*/

function funcion1(){
    console.log("soy funcion 1");
}

function funcion2(){
    console.log("soy funcion 2");
}

function funcion3(){
    console.log("soy funcion 3");
}

function menu(){
do{
    var opcion=parseInt(prompt("Opcion"));
    console.log("Menú ")
    console.log("1.Llamar funcion 1.");
    console.log("2.Llamar funcion 2.");
    console.log("3 Llamar fucion 3.");
    console.log("4.Salir.")
switch(opcion){
    case 1 : funcion1();
    break;
    case 2 : funcion2();
    break;
    case 3 : funcion3()
    break;
}   


}while(opcion != 4);
console

}

menu();
