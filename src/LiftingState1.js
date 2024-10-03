import React from 'react';

function Formulario({ cuandoCambia }) { 
  const manejaEnvio = (evento) => {
    evento.preventDefault(); 
    const valor = evento.target.value; 
    cuandoCambia(valor); 
  };

  return (
    <input type="number" onChange={manejaEnvio} placeholder="Escribe un número"/>
  );
}

export default Formulario;
