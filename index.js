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
const estudiante = {
    nombre1: "Lautaro",
    apellido1: "Villalba",
    nota1: 10,
    aprobo: "aprobó"
};
// Actividad 8 (Variables)
let notas67 = [6, 7, 8, 9, 10];
let acumulador67 = 0;
// Actividad 9 (Variables)


// Actividad 1 (Práctico)
console.log(`${nombre} tiene ${edad} años y está en la ${carrera}. ¿Se encuentra cursando? ${cursando}`)



// Actividad 2 (Práctico)
if (nota >= 6) {
    console.log("Aprobado")
}
else {
    console.log("Desaprobado")
}


// Actividad 3 (Práctico)
if (edad < 13) {
    console.log("Es menor")
}

else if ((edad >= 13) && (edad <= 17)) {
    console.log("Adolescente")
}

else {
    console.log("Adulto")
}

// Actividad 4 (Práctico)
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} multiplicado ${i} es ${numero * i}`)
}

// Actividad 5 (Práctico)
for (let i2 = 1; i2 <= 100; i2++) {
    acumulador1 = (acumulador1 + i2);
}
console.log(`El resultado es: ${acumulador1}`)


// Actividad 6 (Práctico)
for (let i3 = 1; i3 <= 20; i3++) {
    if (i3 % 2 === 1) {
        console.log(`El número ${i3} es impar`)
    }
    else {
        console.log(`El número ${i3} es par`)
    }
}

// Actividad 7 (Práctico)
console.log(`El estudiante ${estudiante.nombre1} ${estudiante.apellido1} obtuvo una calificación de ${estudiante.nota1} y ${estudiante.aprobo} con una buena calificación.`)


// Actividad 8 (Práctico)
for (let i67 = 0; i67 <= 4; i67++) {
    acumulador67 = acumulador67 + notas67[i67];
}
acumulador67 = acumulador67 / notas67.length;
console.log(`El resultado es: ${acumulador67}`);