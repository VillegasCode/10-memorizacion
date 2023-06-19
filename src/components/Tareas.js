import React, { useState } from 'react'

export const Tareas = () => {

  const [tareas, setTareas] = useState([]);

  const guardarTareas = e => {
    e.preventDefault();

    // Forma clara de actualizar el array con useState y una nueva variable
    let tareas_actualizadas = [...tareas, e.target.descripcion.value];
    setTareas(tareas_actualizadas);
    // console.log(tareas_actualizadas);

    // Forma rápida de capturar el valor del input y almacenarlo en el hook tareas
    // setTareas(tarea => [...tareas, e.target.descripcion.value]);
    // console.log(tareas);

  }

  return (
    <div className='tareas-container'>
        <h1>MIS TAREAS</h1>

        <form onSubmit={guardarTareas}>
            <input type='text' name='descripcion' placeholder='Describa la tarea'/>
            <input type='submit' value="Guardar"/>
        </form>

        <h3>Lista de Tareas</h3>
        {/* Mostrando tareas usando el useState*/}
        <ul>
          {
            tareas.map((tarea, indice) => {
              return <li key={indice}>{tareas[indice]}</li>
            })
          }
        </ul>
    </div>
  )
}
