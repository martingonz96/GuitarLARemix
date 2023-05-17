import { useLoaderData, Outlet, useOutletContext } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import styles from "~/styles/guitarras.css"
import ListadoGuitarras from '../components/listadoGuitarras'

export function meta(){
  return [
    {
      title: "GuitarLA - Tienda",
      description: "Nuestra coleccion de guitarras"
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

export async function loader() {
  const guitarras = await getGuitarras()

  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData()

  return (
    <main className='contenedor'>
      <ListadoGuitarras
      guitarras={guitarras}
      />

      <Outlet
      context={useOutletContext()}
      />
    </main>
  )
}

export default Tienda