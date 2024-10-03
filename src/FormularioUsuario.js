import React, { useState } from 'react';

function FormularioUsuario() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const mensajeCambiado = (event) => {
    setNombre(event.target.value);
  };

  const mensajeMostrar = (event) => {
    event.preventDefault(); 
    setMensaje(`Hola, ${nombre}`);
  };

  return (
    <form onSubmit={mensajeMostrar}>
      <input type="text" value={nombre} onChange={mensajeCambiado} placeholder="Escribe tu nombre" />
      <button type="submit">Enviar</button>
      <p>{mensaje}</p> 
    </form>
  );
}

export default FormularioUsuario;

