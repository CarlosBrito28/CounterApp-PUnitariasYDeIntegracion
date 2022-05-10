import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../base/data/heroes";

describe('Pruebas en funciones de Heroes ', () => { 


    test('Debe retornar un Héroe por id', () => { 
        const  id = 1;
        const heroe = getHeroeById( id);

        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);


     })



     test('Debe retornar un undefine si héroe no existe', () => { 
        const  id = 25;
        const heroe = getHeroeById( id);

    
        expect(heroe).toBe(undefined);
     })


     // debe  de retornar  un arreglo  con los Heroes  de DC    
     test('debe  de retornar  un arreglo  con los Heroes  de DC', () => { 

        const  owner  = 'DC';
        const heroes = getHeroesByOwner( owner);
        const heroeData = heroes.filter ( h => h.owner === owner);
        expect( heroes).toEqual(heroeData);
      })




      test('debe  de retornar  un arreglo  con los héroes de Marvel', () => {
          const owner = 'Marvel';
          const heroes = getHeroesByOwner( owner);
          
          expect(heroes.length).toBe(2);

       }) 
    
    
    })