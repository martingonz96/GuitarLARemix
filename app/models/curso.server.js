export async function getCurso(){
    const respuesta = await fetch('https://guitarla-strapi-1u4x.onrender.com/api/curso?populate=imagen');
    const resultado = await respuesta.json()
    return resultado
}
