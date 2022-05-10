const personajes = ['Goku','Vegeta','Trunks'];
const [, , p3] = personajes;
console.log (p3);


const retornaArreglo = () =>{
   return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);




const userStat= (valor) =>{
      return[valor,()=>{console.log('Hola Mundo')}];
}
const[nombre, setNombre] = userStat('Goku');
console.log(nombre);
setNombre();