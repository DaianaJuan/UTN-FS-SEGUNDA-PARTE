import React from 'react'
import ListaCartaColor from './componentes/ListaCartaColor/ListaCartaColor'


function App() {

  const tarjetas = [
    {
      colores: ['#17153B', '#2E236C', '#433D8B', '#C8ACD6'],
      likes: 90,
      fecha: '12 horas',
      id: 1
    },
    {
      colores: ['#F3FEB8', '#FFDE4D', '#FFB22C', '#FF4C4C'],
      likes: 125,
      fecha: 'Ayer',
      id: 2
    },
    {
      colores: ['#987D9A', '#BB9AB1', '#EECEB9', '#FEFBD8'],
      likes: 423,
      fecha: '2 dias',
      id: 3
    },
    {
      colores: ['#6C946F', '#FFD35A', '#FFA823', '#DC0083'],
      likes: 230,
      fecha: '3 dias',
      id: 4
    }
  ]

  return (
    <>
      <ListaCartaColor tarjetas={tarjetas}/>
    </>
  )
}

export default App
