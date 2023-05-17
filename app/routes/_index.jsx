
import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/post.server"
import { getCurso } from "../models/curso.server"

import ListadoGuitarras from "../components/listadoGuitarras"
import stylesGuitarras from "../styles/guitarras.css"

import ListadoPost from "../components/listadoPost"
import stylesPosts from '../styles/blog.css'


import Curso from "../components/curso"
import stylesCurso from "../styles/curso.css"




export function meta(){

} 

export function links(){

  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]

}

export async function loader(){
 
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
 
  return{ guitarras: guitarras.data, 
          posts: posts.data,
          curso: curso.data
        }
}


function Index() {

  const {guitarras, posts, curso} = useLoaderData()

  console.log(guitarras, posts, curso)

  return (
    <>
    <main className="contenedor">
      <ListadoGuitarras
      guitarras={guitarras}
      />
    </main>

    <Curso
    curso={curso.attributes}
    />

    <section>
      <ListadoPost
      posts={posts}
      />
    </section>

    </>
  )
}

export default Index