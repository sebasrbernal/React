import { useState } from 'react'
import AddTarea from './components/AddTarea'
import Header from './components/Header'
import Tareas from './components/Tareas'


function App() {
  //Funcion boton agregar (Estado)
  const [mostrarForm, setMostrarForm]=useState(false)

  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: 'Ir al cine',
      fecha: '02 de Febrero de 2022',
      terminada: true,
    },
    {
      id: 2,
      texto: 'Comprar en el supermercado',
      fecha: '10 de Febrero de 2022',
      terminada: false,
    },
    {
      id: 3,
      texto: 'Hacer app en React',
      fecha: '11 de Febrero de 2022',
      terminada: false,
    }
  ])

  //Borrar Tarea
  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  //Terminar tarea
  const terminarTarea= (id) => {
    setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea,terminada: !tarea.terminada}: tarea))
    //                        funcion flecha si tarea = id, y .. va tomar una copia y va a cambiar su booleano al contrario 
  }

// Agregar tarea
const addTarea=(tarea)=>{
  //generar un id 
  const id = Math.floor(Math.random()*10000)+1
  // Nueva tarea
  const nuevaTarea= {id, ...tarea}
  //Unirlo a las tareas existentes 
  setTareas([...tareas, nuevaTarea])
}

// onAdd={()=>setMostrarForm(!mostrarForm)} para cambiar el valor 
//{mostrarForm && <  AddTarea onAdd={addTarea}/>} condicional para mostrar o no 
  return (
    <div className='container'>
      <Header onAdd={()=>setMostrarForm(!mostrarForm)} mostrarForm={mostrarForm}/> 
     {mostrarForm && <  AddTarea onAdd={addTarea}/>}
      {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTarea}  onToggle={terminarTarea}/> : 'No hay tareas para mostrar'}
    </div>
  )
}

export default App
