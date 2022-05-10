//import React, { Fragment } from 'react';
import React from "react";
import PropTypes from 'prop-types';
//FC

const PrimeraApp = ({saludo, subtítulo}) => {
   
    return(
       // <Fragment>
       <>
          <h1> { saludo }</h1>
          {/*<pre>{JSON.stringify( saludo, null, 3) }</pre>*/}
          <p> {subtítulo}</p>
        </>
        //</Fragment>
      
    );
  
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired

}

PrimeraApp.defaultProps = {
    subtítulo: 'soy un subtítulo'
}

export default PrimeraApp;