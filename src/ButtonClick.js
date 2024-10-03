import React from 'react';

function BotonClick() { 
  const mensajeClick = () => { 
    alert('¡Botón clickeado!');
  };

  return (
    <button onClick={mensajeClick}>Click aquí</button> 
  );
}

export default BotonClick;

