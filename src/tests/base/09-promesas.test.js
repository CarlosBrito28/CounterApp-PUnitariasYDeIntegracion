import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../base/data/heroes";

describe('Pruebas con promesas', () => { 



    test('getHeroeByIdAsync debe  de retornar un Héroe async', ( done) => { 
        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
            
        })

    });


        test('debe de obtener un mensaje de ERROR  si el heroe por id no existe ', (done) => { 

            const id = 10;
            getHeroeByIdAsync( id )
            .catch(error =>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
           

         });



     })




 })