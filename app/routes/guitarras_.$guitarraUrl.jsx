import { useState } from "react"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"

export function meta({data}){
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`,
      description: `${data.data[0].attributes.descripcion}`
    }
  ]
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}


export async function loader({params}){
 
    const { guitarraUrl } = params

    const guitarra = await getGuitarra(guitarraUrl)

    console.log(guitarra.data[0].attributes.nombre)

    if(guitarra.data.length === 0){
      throw new Response('',{
        status: 404,
        statusText: "Guitarra no encontrada"
      })
    }

   return guitarra
}

function Guitarra() {
  
  const { agregarCarrito } = useOutletContext()

  const [cantidad , setCantidad] = useState(0)

  const guitarra = useLoaderData()
  
  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault()
  
    if (cantidad < 1) {
      alert("Seleccionar cantidad")
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)

  }

  return (
    <div className="contenedor guitarra">
       <img src={imagen.data.attributes.url} alt={`guitarra ${nombre}`}></img>

       <div className="contenido ">
          <h3>{nombre}</h3>
          <p className="texto">{descripcion}</p>
          <p className="precio">${precio}</p>
          <form className="formulario"
          onSubmit={handleSubmit}
          >
            <label htmlFor="cantidad">Cantidad:</label>
            <select 
            onChange={e=> setCantidad(parseInt(e.target.value))}
            id="cantidad">
            <option value="">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

            <input type="submit"  value="Agregar al carrito"/>
          </form>
       </div>
    </div>
  )
}

export default Guitarra