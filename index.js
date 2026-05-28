let nombre = "Enderson";
const edadEnder = 18;
let carrera = "Tecnicatura Superior en Desarrollo de Software Multiplataforma"
let cursando = false;
const edad = 23;
let nota = 7;

console.log(`${nombre} tiene ${edad} años y está en la ${carrera}. ¿Se encuentra cursando? ${cursando}`)




if (nota >= 6) {
    console.log("Aprobado")
}
else {
    console.log("Desaprobado")
}



if (edad < 13) {
    console.log("Es menor")
}

else if ((edad >= 13) && (edad <= 17)) {
    console.log("Adolescente")
}

else {
    console.log("Adulto")
}
