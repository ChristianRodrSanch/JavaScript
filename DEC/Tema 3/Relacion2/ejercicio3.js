// 3. Añade en la página web una actividad que lea un únicamente un carácter. Letra mayúscula o minúscula.

function letraMinusMayus() {

let caracter = document.getElementById('caracter').value;

primeraLetra = caracter.substring(0,1);

    alert("Primera letra de tu cadena es: " + primeraLetra);



}