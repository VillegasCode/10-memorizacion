import React, { useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

const [ nombre, setNombre ] = useState("");

// Trabajando con el Hook useRef
// const gestorInput = useRef();

const asignarGestor = e => {
    // Esto se usa si trabajamos con el hook useRef
    // setNombre(gestorInput.current.value);
    setNombre(e.target.value);
}

  return (
    <div>
        <h1>Nombre del Gestor: {nombre}</h1>
        {/* Colocar este atributo dentor del index si se va a usar el ook useRef ref={gestorInput} */}
        <input type='text' onChange={asignarGestor} placeholder="Introduce tu nombre de gestor" />

        <h2>Listado de empleados:</h2>

        <p>Los usuarios son gestionados por {nombre} vienen de JSON placeholder...</p>

        <Empleados />
    </div>
  )
}