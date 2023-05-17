import { Link } from "@remix-run/react"
import { formatearFecha } from '../utils/helpers'



function Post({post}) {

    const {contenido, imagen, titulo, url, publishedAt} = post
  return (
    <article className="post">
    <img src={imagen.data.attributes.formats.small.url} alt={`Post de ${titulo}`} />
    <div className="contenido">
        <h2>{titulo}</h2>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/posts/${url}`}>Leer post</Link>
    </div>

    </article>
    
  )
}

export default Post