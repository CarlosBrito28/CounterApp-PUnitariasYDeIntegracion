
const nombre = 'Carlos';
const apellido = 'Brito';

//const nombreCompleto =  nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
//console.log(nombreCompleto);



export function  getSaludo(nombre = 'Daniel'){
    return 'Hola ' + nombre;
}
// console.log(`Este es un texto: ${getSaludo (nombre) }`);
    