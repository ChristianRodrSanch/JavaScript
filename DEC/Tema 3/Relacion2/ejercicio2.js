
/* 2. Crea una página web que lea un número Real. Puedes usar método de la clase Number. Si no es un real devuelve una alerta.*/

function comprobarNumReal() {

let num = parseFloat(document.getElementById('num').value);


if (Number.isFinite(num)){
    console.log("Es un número real");

}else {

    alert("El numero introducido no es un numero real")
}



}







