

// 1.-  Sobre el ejemplo del tema, donde se pide un número en el html, usaremos las funciones necesarias para comprobar lo siguiente:

// - Es un número entero

// - Es positivo

// - Es menor de 100

// En caso de no cumplir alguna de las condiciones mostrará una alerta.



function leer_num() {

    let num = document.getElementById('num').value;
    numeroEntero(num);
    numeroPositivo(num);
    comprobarMenor100(num);
    console.log("El numero pasado es: " + num);
    
    }

function numeroEntero() {

let num = parseFloat(arguments[0]);

if(Number.isInteger(num)) {
    console.log("El numero pasado entero");
}else{
    alert("El numero pasado no es entero");
}

}


function numeroPositivo() {

    let num = (arguments[0]);
    if(num < 0 ) {
        alert("El numero proporcionado es negativo");

    } else {
        console.log("El numero proporcionado es positivo");
    }

}


function  comprobarMenor100() {

    let num = (arguments[0]);
    
    if(num >= 100) {
        
        alert("El numero proporcionado es superior a 100");
    } else {
        console.log("El numero proporcionado es inferior a 100 entra dentro del parametro");
    }


}




