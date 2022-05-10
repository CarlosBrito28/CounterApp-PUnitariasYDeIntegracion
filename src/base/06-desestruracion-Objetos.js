// Desestructuración 
//Asignación  Desestructurante 


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave:'Ironman'
};

//const { edad,clave,nombre} = persona;


//console.log(nombre);
//console.log(edad);
//console.log(clave);

const retornoPersona = ({nombre, clave, edad, rango = 'capitan'}) =>{
// console.log(nombre, edad, rango);

return{
    nombreNormal:nombre,
    nombreClave:clave,
    anios:edad,
    latlng:{
        lat:142323,
        lng:32133
        }
    }
}
const { nombreNormal, nombreClave,anios, latlng: { lat, lng} }= retornoPersona( persona);

console.log( nombreNormal, nombreClave,anios);
console.log( lat, lng);