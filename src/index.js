/*antes
import React from  'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';

import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#app');
ReactDOM.render( <CounterApp value = {10} /> , divRoot );*/


//version 18
import React from  'react';
import {createRoot} from 'react-dom/client';


//import CounterApp from './CounterApp';
import './index.css';
import PrimeraApp from './PrimeraApp';



const divRoot = document.querySelector('#app');
const  root= createRoot( divRoot);
//root.render( <CounterApp value = {5} /> );
root.render( <PrimeraApp saludo='Hola soy Bills' /> );