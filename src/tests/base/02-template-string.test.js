import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => { 


    test(' getSaludo debe retornar hola Carlos', () => { 

         const nombre = 'Carlos';

         const saludo = getSaludo (nombre);
        expect( saludo ).toBe( 'Hola ' + nombre);

        
     })

     // getSaludo  debe retornar  Hola Daniel  si no hay  argumento nombre


     test('getSaludo debe retornar Hola Daniel', () => { 

        const saludo =  getSaludo();
        expect(saludo).toBe( 'Hola Daniel');

      })
 })