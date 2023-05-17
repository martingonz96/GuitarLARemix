export async function getPosts(){
    const respuesta = await fetch('https://guitarla-strapi-1u4x.onrender.com/api/posts?populate=imagen');
    const resultado = await respuesta.json()
    return resultado
}


export async function getPost(url){
    const respuesta = await fetch(`https://guitarla-strapi-1u4x.onrender.com/api/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}