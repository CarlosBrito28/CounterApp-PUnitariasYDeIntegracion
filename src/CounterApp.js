import React, {useState} from "react";
import PropTypes from 'prop-types';
//FC


const  CounterApp = ({ value })  => {

    const [counter, setCounter] = useState( 0 );
   
    //handleAdd
    const handleAdd = () =>{
      // setCounter( counter + 1);
      setCounter( (c) => c + 1);
    }
   const handleSustact = () => setCounter ( counter -1);
   const handleReset = () => setCounter ( value);
    return(
    <>

    <h1>CounterApp</h1>
    <h2>{counter}</h2>


    <button onClick={ handleAdd }>+1</button>
    <button onClick={ handleReset}>Reset</button>
    <button onClick={ handleSustact } >-1</button>

    

    </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired

}


export default CounterApp;