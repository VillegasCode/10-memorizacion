import React, { useCallback, useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

const [ nombre, setNombre ] = useState("");
const [ pagina, setPagina ] = useState(1);

// Trabajando con el Hook useRef
// const gestorInput = useRef();

const asignarGestor = e => {
    // Esto se usa si trabajamos con el hook useRef,, previamente importar el useRef
    // setNombre(gestorInput.current.value);
    setNombre(e.target.value);
}

useEffect(() => {
    console.log("Vista actualizada!!");
}, [nombre, pagina]);

const mostrarMensaje = useCallback(() => {
  console.log("Hola que tal soy un mensaje desde el componente Empleados");
});

  return (
    <div>
        <h1>Nombre del Gestor: {nombre}</h1>
        {/* Colocar este atributo dentor del index si se va a usar el ook useRef ref={gestorInput} */}
        <input type='text' onChange={asignarGestor} placeholder="Introduce tu nombre de gestor" />

        <h2>Listado de empleados:</h2>

        <p>Los usuarios son gestionados por {nombre} vienen de JSON placeholder...</p>
        <button onClick={() => { setPagina(1) }}>Página 1</button>
        <button onClick={() => { setPagina(2) }}>Página 2</button>

        <Empleados pagina={pagina} mensaje={mostrarMensaje} />
    </div>
  )
}