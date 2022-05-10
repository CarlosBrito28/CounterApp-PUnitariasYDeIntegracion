import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas  en </PrimeraApp>', () => { 

test('debe mostrar el mensaje "Hola soy Bills', () => { 
    
    const saludo = 'Hola soy Bills';
    const {getByText} = render (<PrimeraApp saludo={saludo}/>)  
    expect(getByText(saludo)).toBeInTheDocument();



 })

 })