// Actividad 1 (Variables)
let nombre = "Enderson";
const edadEnder = 18;
let carrera = "Tecnicatura Superior en Desarrollo de Software Multiplataforma"
let cursando = false;
// Actividad 2 (Variables)
let nota = 7;
// Actividad 3 (Variables)
const edad = 23;
// Actividad 4 (Variables)
const numero = 5;
// Actividad 5 (Variables)
let acumulador1 = 0;
// Actividad 6 (Variables)

// Actividad 7 (Variables)

// Actividad 8 (Variables)

// Actividad 9 (Variables)



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

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} multiplicado ${i} es ${numero * i}`)
}

for (let i2 = 1; i2 <= 100; i2++) {
    acumulador1 = (acumulador1 + i2);
}
console.log(`El resultado es: ${acumulador1}`)


for (let i3 = 1; i3 <= 20; i3++) {
    if (i3 % 2 === 1) {
        console.log(`El número ${i3} es impar`)
    }
    else {
        console.log(`El número ${i3} es par`)
    }
}