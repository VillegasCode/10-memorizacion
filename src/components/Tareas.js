import React from 'react'

export const Tareas = () => {
  return (
    <div className='tareas-container'>
        <h1>MIS TAREAS</h1>

        <form>
            <input type='text' name='descripcion' placeholder='Describa la tarea'></input>
            <input type='submit' value="Guardar"></input>
        </form>

        <h3>Lista de Tareas</h3>
    </div>
  )
}
