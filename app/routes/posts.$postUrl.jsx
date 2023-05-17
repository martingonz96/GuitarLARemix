import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/post.server"
import styles from "../styles/blog.css"
import { formatearFecha } from "../utils/helpers"

export function meta({data}){
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`,
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


export async function loader({params}) {
  
    const { postUrl } = params

    const post = await getPost(postUrl)

    console.log(post.data[0].attributes.titulo)

    if(post.data.length === 0){
      throw new Response('',{
        status: 404,
        statusText: "Blog no encontrado"
      })
    }

   return post
}


const Post = () => {
 
  const post = useLoaderData()

  console.log(post.data[0].attributes)

  const { titulo, contenido, imagen, url, publishedAt } = post.data[0].attributes


  return (
    <article className="contenedor post mt-3">
    <img src={imagen.data.attributes.url} alt={`Post de ${titulo}`} />
    <div className="contenido .mt-3">
        <h2>{titulo}</h2>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
    </div>

    </article>
    
  )
}

export default Post
