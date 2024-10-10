/*
// 1. Realiza un programa que muestre todos los números impares que hay entre dos números que pide al usuario.  Puedes usar prompt para pedir los números al usuario.



function leerNum(){
console.log(**********EJERCICIO 1******************);

    let numeroDado1 = parseInt(prompt("Por favor introduce  el primer numero"));
    let numeroDado2 = parseInt(prompt("Por favor introduzca el segundo numero"));
    
        for(i=numeroDado1;i<= numeroDado2; i++) {
            if(i%2!==0){
                console.log(i);
            }
        }
}

leerNum();


// 5. Programa que calcule el área de un de una parcela en m2 y que controle que la longitud de los lados en >0 .  Mostrando un mensaje de error si es incorrecto.

function parcela() {
console.log(**********EJERCICIO 5******************);
let lado1 = 5,lado2=8;
let Area = 0;
if(lado1 > 0 && lado2 > 0 ) {

    Area = lado1 * lado2;
    console.log("El area de la parcela es: " +Area);
}else {
    console.log("Los lados o uno de los lados no es superior a 0 ");
}





}

parcela();

*/