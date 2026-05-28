const nombre_alumno = "Lautaro";
const apellido_alumno = "Villalba";
let notas_alumno = [9, 8, 9, 6, 9, 8];
let promedio 
let acumulador = 0;

for (let i = 0; i <= 5; i++) {
    acumulador = acumulador + notas_alumno[i];
}

promedio = acumulador / notas_alumno.length;
if (promedio >= 7) {
    console.log(`${nombre_alumno} ${apellido_alumno} obtuvo un promedio de ${promedio.toFixed(1)}. Felicidades, su promedio es muy bueno.`)
}
else if (promedio >= 6) {
    console.log(`${nombre_alumno} ${apellido_alumno} obtuvo un promedio de ${promedio.toFixed(1)}. Felicidades, usted ha aprobado.`)
}
else {
    console.log(`${nombre_alumno} ${apellido_alumno} obtuvo un promedio de ${promedio.toFixed(1)}. Lo lamento... usted ha desaprobado. `)
}