import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datos from './Components/Datos'


function App() {
  
  const [nombre, setNombre] = useState("")
  const [pelicula, setPelicula] = useState("")

  const handleSubmit = e => {
      e.preventDefault()

      const nombreSinEspacios = nombre.trimStart();

        if(nombreSinEspacios.length>2 && pelicula.length>5){
            console.log(`Nombre: ${nombre}`);
            console.log(`Pelicula: ${pelicula}`);
        }else{
            alert("Por favor chequea que la información sea correcta");
        }
  }
  return (
    <>
    <h2>Peliculas Favoritas</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre: </label>
        <input
            type='text'
            placeholder='Ingresar Nombre'
            id='nombre'
            value={nombre}
            onChange={e =>setNombre(e.target.value)}
        />

        <label htmlFor='pelicula'>Pelicula: </label>
        <input
            type='text'
            placeholder='Ingrese su pelicula favorita'
            id='pelicula'
            value={pelicula}
            onChange={e =>setPelicula(e.target.value)}
        />
        <button type="submit">Enviar</button>

  </form>
  <Datos
    nombre= {nombre}
    pelicula= {pelicula}
  />
  </>
  )
}

export default App
