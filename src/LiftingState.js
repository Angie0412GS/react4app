import React, { useState } from 'react';
import Formulario from './LiftingState1';  
import Resultado from './LiftingState2';   

function LiftingState() {
  const [numero, setNumero] = useState('');

  const manejaNumero = (nuevoNumero) => { 
    setNumero(nuevoNumero);
  };

  return (
    <div>
      <Formulario cuandoCambia={manejaNumero} />  
      <Resultado numero={numero} />
    </div>
  );
}

export default LiftingState;
