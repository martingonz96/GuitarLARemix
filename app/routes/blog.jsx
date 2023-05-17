import { useLoaderData } from '@remix-run/react'
import { getPosts } from '../models/post.server'
import Post from '../components/post'
import styles from "../styles/blog.css"
import ListadoPost from '../components/listadoPost'

export function meta(){
  return [
    {
      title: "GuitarLA - Blog"
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

export async function loader(){
   const posts = await getPosts()

   console.log(posts.data)

   return posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return (
   <main className='contenedor'>
    <ListadoPost
    posts={posts}
    />
   </main>
  )
}

export default Blog