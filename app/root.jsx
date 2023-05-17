import { useEffect, useState } from "react";

import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react"


import styles from "~/styles/index.css"
import Header from "~/components/header";
import Footer from "~/components/footer";


export function meta() {
    return [
      { charset: "utf-8" },
      { title: "GuitarLA - Remix" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
  }

  export function links() {
    return [{
           rel: "stylesheet",
           href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
         },
         {
            rel: "stylesheet",
            href: styles
         },
         {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
         },
         {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
         },
         {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap"
         }
         
        ]
  }

export default function App() {
  
  const carritoLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null

  const [carrito , setCarrito] = useState(carritoLs)

  useEffect(() =>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log("render..")
  },[carrito])

  const agregarCarrito = (guitarra) => {
    if(carrito.some(guitarraState => guitarraState.id == guitarra.id)){
      // iterar sobre el arreglo e identificar el duplicado
      const carritoActualizado = carrito.map(guitarraState => {
        if(guitarraState.id === guitarra.id){
          //sobreescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      //Anadir al carrito
      setCarrito(carritoActualizado)

    } else {
      //Registro nuevo
      setCarrito([...carrito, guitarra])
    }
    
  }

  const actualizarCantidad = guitarra =>{
    const carritoActualizado = carrito.map( guitarraState => {
         if(guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad
         }

         return guitarraState
    })

    setCarrito(carritoActualizado)
  }

  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id )

    setCarrito(carritoActualizado)
  }

    return (
        <Document>
            <Outlet
            context={{
              agregarCarrito,
              carrito,
              actualizarCantidad,
              eliminarGuitarra
            }}
            />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
            <Meta/>
            <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}


/** Maneja de errores **/

export function ErrorBoundary(){
  const error = useRouteError()

  if(isRouteErrorResponse(error)){
    return (
       <Document>
       <p className="error">{error.status} {error.statusText}</p>
       </Document>
  )
}

}
