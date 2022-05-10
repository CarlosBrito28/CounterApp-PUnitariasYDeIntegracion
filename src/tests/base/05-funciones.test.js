import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js', () => { 
test('getUser debe retornar un objeto', () => { 

    const userTest = {
        uid: 'ABC123',
        username:'ELmáduro'
    }


    const user = getUser(); 


    expect(user).toEqual(userTest);
 })

//getUsuarioActivo debe retornar un objeto
 test('getUsuarioActivo debe retornar un objeto', () => { 
     
    const nombre = 'Carlitos';
    const userActivo = getUsuarioActivo( nombre);
    expect(userActivo).toEqual({
        uid: 'ABC567',
        username:nombre
    });



  })

 })