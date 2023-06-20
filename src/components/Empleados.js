import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
({pagina, mensaje}) => {
  
    const [empleados, setEmpleados] = useState([]);

  
    const conseguirEmpleados = async(page) => {
        const url = "https://reqres.in/api/users?page=" + page;
        const peticion = await fetch(url);
        const {data: empleados} = await peticion.json();

        setEmpleados(empleados);

        console.log("Se ha vuelto a renderizar empleados")
    }

    useEffect(() => {
        conseguirEmpleados(pagina);
        mensaje();
    }, [pagina]);
  
    return (
    <div>
        <p>Mostrando la página: {pagina}</p>
        <ul className='empleados'>
            {empleados.length >= 1 &&
                empleados.map(empleado => {
                    return <li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
                })}

        </ul>
    </div>
  )
}
);