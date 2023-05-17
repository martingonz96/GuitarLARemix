export async function getGuitarras(){
    const respuesta = await fetch('https://guitarla-strapi-1u4x.onrender.com/api/guitarras?populate=imagen');
    const resultado = await respuesta.json()
    return resultado
}


export async function getGuitarra(url){
    const respuesta = await fetch(`https://guitarla-strapi-1u4x.onrender.com/api/guitarras?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}