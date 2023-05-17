import { useOutletContext } from '@remix-run/react'
import imagen from '../../public/img/nosotros.jpg'

import nosotroStyles from '../styles/nosotros.css'


export function meta() {

  return [
    {
      title: "GuitarLA - Nosotros",
      description: "Ventas de guittara, blog de musica y mas"
    }
  ]
}


export function links() {
  return [
    {
      rel: "stylesheet",
      href: nosotroStyles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}


const Nosotros = () => {

  const data = useOutletContext()

  console.log(data)
  return (
    <main className="contenedor nosotros">
       <h2 className="heading">Nosotros</h2>
       <div className="contenido">
       <img src={imagen} alt="imagen sobre nosotros" />
       <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex arcu, sodales sed nulla a, aliquam volutpat magna. Maecenas vitae turpis fringilla, consequat nulla eu, fermentum ex. Nam non rutrum ipsum. Morbi pellentesque neque vel porttitor ullamcorper. Proin sed erat et velit fringilla mattis. Maecenas ultricies rhoncus arcu et iaculis. Ut aliquet arcu sed urna ultrices, vitae laoreet leo mollis. Praesent in lacus leo. Nam eget elementum est, vitae viverra risus. 
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex arcu, sodales sed nulla a, aliquam volutpat magna. Maecenas vitae turpis fringilla, consequat nulla eu, fermentum ex. Nam non rutrum ipsum. Morbi pellentesque neque vel porttitor ullamcorper. Proin sed erat et velit fringilla mattis. Maecenas ultricies rhoncus arcu et iaculis. Ut aliquet arcu sed urna ultrices, vitae laoreet leo mollis. Praesent in lacus leo. Nam eget elementum est, vitae viverra risus. </p>
       </div>
       </div>
    </main>
  )
}

export default Nosotros