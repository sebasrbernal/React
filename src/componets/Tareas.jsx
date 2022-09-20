const tareas = [
    {
        id: 1,
        texto: 'Ir al cine',
        fecha: '02 de Febrero de 2022',
        terminado: true,
    },
    {
        id: 2,
        texto: 'Comprar en el supermercado',
        fecha: '10 de Febrero de 2022',
        terminado: false,
    },
    {
        id: 3,
        texto: 'Hacer app en React',
        fecha: '11 de Febrero de 2022',
        terminado: false,
    }
]

const Tareas=()=>{
    return(
        <>
           {tareas.map((tarea)  => (<h3 key={tarea.id} > {tarea.texto}</h3>))}
         </>
    )
}

export default Tareas
