import { useState } from "react"

const AddTarea =({onAdd})=>{
    //Estados
    const [texto,setTexto]=useState('')
    const [fecha,setFecha]=useState('')
    const [terminada,setTerminada]=useState(false)
    
    const onSubmit= (e)=>{
        e.preventDefault()

        if (!texto){
            alert('Ingresa la tarea')
            return
        }

        //Jalar los datos 
        onAdd({texto,fecha,terminada})

        //Borrar los campos
        setTexto('')
        setFecha('')
        setTerminada(false)
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label> Tarea</label>
                <input 
                    type="text" 
                    placeholder="Agregar una tarea" 
                    value={texto}
                    onChange={(e)=>setTexto(e.target.value)} //para poder modificar 
                />
            </div>
            <div className="form-control">
                <label> Fecha</label>
                <input 
                    type="text" 
                    placeholder="Teclea la fecha" 
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)} //para poder modificar 
                />
            </div>
            <div className="form-control form-control-check">
                <label> Terminada</label>
                <input 
                  type="checkbox" 
                  checked={terminada}
                  onChange={(e)=>setTerminada(e.currentTarget.checked)} //para poder modificar 
                 
                />
            </div>
            <input type="submit" value='Guardar'  className="btn btn block"/>
        </form>

    )

}
export default AddTarea