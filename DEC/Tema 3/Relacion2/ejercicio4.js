// 4. Añade en la página web una actividad que lea un DNI válido, 7 números y un carácter.
// Además la letra debe ser la correcta, para ello usa un algoritmo que compruebe la letra. 



  function  letraDni() {

    let dni = document.getElementById('dni').value;
    arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numDni = dni.substring(0,8);
     pos = numDni%23;
    
     if(arrayLetras[pos] == dni[dni.length -1]) {
            letra = arrayLetras[pos];
        console.log("La letra del dni es correcta: " + letra);
     }else {

        console.log ("La letra del dni es incorrecta seria: " + letra);
     }





  }
  