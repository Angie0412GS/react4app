import React from 'react';
import BotonClick from './ButtonClick';  
import FormularioUsuario from './FormularioUsuario'; 
import LiftingState from './LiftingState';

function App() {
  return (
    <div>
      <h1>Manejo de eventos</h1>
      <BotonClick /> 

      <h1>Creación y gestión de formularios</h1>
      <FormularioUsuario />

      <h1>Lifting State Up</h1>
      <LiftingState />
    </div>
  );
}

export default App;
