import React, { useState } from 'react';

function Card({usuario}) {
  return (
    <div>
      <h1>Se ha registrado correctamente</h1>
      <h3>Nombre: {usuario.username}</h3>
      <h3>Correo: {usuario.correo}</h3>
    </div>
  );
}

export default Card;
