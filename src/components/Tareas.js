import React, { useMemo, useState } from 'react'

export const Tareas = () => {

  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(5000);

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

  const borrarTarea = id => {
    //Filtrar las tareas para borrar la que no quiero
    let nuevas_tareas = tareas.filter( (tarea, indice) => indice !== id);

    //Set State, guardar el nuevo listado de tareas en el estado
    setTareas(nuevas_tareas);
  }


  const sumarAlContador = e => {
    setContador(contador + 1);
  }

  const contadoresPasados = (acumulacion) => {
    for(let i = 0; i <= acumulacion; i++) {
      console.log("Ejecutando acumulación de contadores del pasado...");
    }

    return `Contador manual de tareas acumuladas -> ${acumulacion}`;
  }

const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div className='tareas-container'>
        <h1>MIS TAREAS</h1>

        <form onSubmit={guardarTareas}>
            <input type='text' name='descripcion' placeholder='Describa la tarea'/>
            <input type='submit' value="Guardar"/>
        </form>

        {/* <h3>Contador manual de tareas: {contador}</h3> */}
        <h3>{memoContadores}</h3>
        <button onClick={sumarAlContador}>Sumar</button>

        <h3>Lista de Tareas</h3>
        {/* Mostrando tareas usando el useState*/}
        <ul>
          {
            tareas.map((tarea, indice) => {
              return (
                <li key={indice}>
                    {tarea}
                    &nbsp;
                    <button onClick={() => borrarTarea(indice)}>X</button>
                </li>
                )
            })
          }
        </ul>
    </div>
  )
}
