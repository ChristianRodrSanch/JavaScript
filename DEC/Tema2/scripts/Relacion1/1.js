

function ejer6() {
notaAlumno = parseInt(prompt("Introduzca la nota del alumno: "));

switch(true){

    case (notaAlumno < 5): console.log("Insuficiente");
        break;

    case (notaAlumno == 5): console.log("Suficiente");
            break;
    case (notaAlumno == 6 ): console.log("Bien");
            break;
    case ((notaAlumno == 7) || (notaAlumno==8)): console.log("Notable");
            break;
    case ((notaAlumno == 9) || (notaAlumno= 10)): console.log("Sobresaliente");
            break;

    }
}

ejer6();