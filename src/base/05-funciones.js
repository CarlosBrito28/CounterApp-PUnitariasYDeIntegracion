//Funciones JS

const saludar =  function ( nombre ){
    return `Hola, ${ nombre}`;
}

//console.log(saludar(`Carlitos`));

const saludar2 = ( nombre) => {
    return `Hola, ${nombre}`;
}

//console.log( saludar2 (`Carlos`));


const saludar3 = ( nombre ) => `Hola, ${nombre}`;
//console.log(saludar3(`Goku`));

const saludar4 = () => `Hola Mundo`;
//console.log(    saludar4());



export const getUser = () => ({
    uid: 'ABC123',
    username:'ELmáduro'
});
//const user = getUser();
//console.log(user);



//tarea 
export const getUsuarioActivo = ( nombre) => ({
    uid: 'ABC567',
    username:nombre
}); 

//const usuarioActivo = getUsuarioActivo ('Carlos');
//console.log ( usuarioActivo);