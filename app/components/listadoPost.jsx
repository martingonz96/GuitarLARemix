import Post from '../components/post'
 
function ListadoPost({posts}) {

  return (
    <>
    <h2 className='heading'>Blog</h2>
    <div className='blog'>
      {posts.map(post =>{
       return <Post
       post={post.attributes}
       key={post.id}
       />
      })}
    </div>
    </>
  )
}

export default ListadoPost