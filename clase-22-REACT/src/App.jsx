import React from 'react'
import Button from './components/Button'
import './style.css'
import CodePointInfo from './CodePointInfo'
import ColorCard from './components/ColorCard/ColorCard'
import ColorCardList from './components/ColorCardList/ColorCardList'




function App() {
  
  /*
    La callback se ejecutara por cada elemento del array, y se le pasará dicho elemento por parámetro.
    Lo que retorne la callback va a ser el elemento nuevo agregado al array resultante.

    MAP: retorna arrays
  */ 
  /*
  const result = nombres.map((nombre) => {
    return '<div>' + nombre + '</div>'
  })
  console.log(result)
  */
  /*
  [
    '<div>pepe</div>',
    '<div>juan</div>',
    '<div>diego</div>',
    '<div>maria</div>'
  ]
  */
  /*
  const listaJSXNombres = [
    <div>Pepe</div>,
    <div>Juan</div>,
    <div>María</div>
  ]
  */
  const nombres = ['Pepe', 'Juan', 'Diego', 'María']
  const listaJSXNombres = nombres.map((nombre) => {
    return <div>{nombre}</div>
  })

  const tarjetas = [
    {
      colors: ['#17153B', '#2E236C', '#433D8B', '#C8ACD6'],
      likes: 90,
      fecha: '12 horas',
      id: 1
    },
    {
      colors: ['#F3FEB8', '#FFDE4D', '#FFB22C', '#FF4C4C'],
      likes: 125,
      fecha: 'Ayer',
      id: 2
    },
    {
      colors: ['#987D9A', '#BB9AB1', '#EECEB9', '#FEFBD8'],
      likes: 423,
      fecha: '2 dias',
      id: 3
    },
    {
      colors: ['#6C946F', '#FFD35A', '#FFA823', '#DC0083'],
      likes: 230,
      fecha: '3 dias',
      id: 4
    }
  ]
  
  const colores = tarjetas.map(tarjeta => tarjeta.colors)
  console.log(colores)
  
  
  return (
    <div className='cajas'>
      
      <ColorCardList tarjetas={tarjetas}/>
      
    </div>
  )
}

/*
<Button><i class="bi bi-heartbreak-fill"></i></Button>
      <CodePointInfo titulo={'Icon font'}>
        <p>Using the web font? Copy, paste, and go.</p>
        <code>{`<i class="bi bi-balloon-fill"></i>`}<i class="bi bi-clipboard"></i></code>
      </CodePointInfo>
      <CodePointInfo titulo={'Code point'}>
        <span>Unicode: U+F61F</span><br/>
        <span>CSS: \F61F</span><br/>
        <span>JS: \uF61F</span><br/>
        <span>HTML: &#xF61F</span>
      </CodePointInfo>
      <CodePointInfo titulo={'Copy HTML'}>
        <p>Paste the SVG right into your project's code.</p>
        <code>{`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
        class="bi bi-balloon-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 
        1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 
        1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-
        .248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-
        .289l.008.017a.25.25 0 1 0 .448-.224zM4.352 3.356a4 4 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5s-
        .226.496-.498.542c-.95.162-1.749.78-2.173 1.617a.6.6 0 0 1-.52.341c-.346 0-.599-.329-.457-.644"/></svg>
        `}</code>
      </CodePointInfo>
*/

export default App
