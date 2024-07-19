import React from 'react'
import Navbar from './componentes/Navbar/Navbar'

/* OPERADOR TERNARIO */

function App() {
  
  

  const userData = {
    logged: false,
    isAdmin: true,
    lang: 'en'
  }

  /* 
  Van a crear un componente llamado Navbar y van a pasarle por props el objeto userData
  Si isLogged es false entonces mostraran un button que diga 'login'
  Si isAdmin es true mostraran un button que diga 'crear producto'
  OPCIONAL:
  Si lang está en 'en' todos los textos deben ser en ingles
  Si lang está en 'es' todos los textos deben ser en español
  */

  return (
    <>
      <Navbar userData={userData}/>
    </>
  )
}

export default App

/*

let condicion = false
let estaRegistrado = true

return(
      {
        condicion
        ? <h2>Se cumple</h2>
        : <h3>No se cumple</h3>
      }

      {
        condicion && <h2>Se cumple la condición</h2>
      }

      {
        estaRegistrado && <h2>Logueado</h2>
      }
      )
*/

/*
import React from 'react'
const NavBar = (props) => {
    const isLogged = props.userData.isLogged
    const isAdmin = props.userData.isAdmin
    const lang = props.userData.lang
    const data ={
        en: {
            loguear: 'LogIn',
            create: 'Create Product',
        },
        es: {
            loguear: 'Registrarse',
            create: 'Crear Producto'
        }
    }
    const dataSelected = data[lang]
    return (
        <div>
            <span>Logo</span>
            <span>HOME</span>
            {
                !isLogged && <button>{dataSelected.loguear}</button>
            }
            {
                isAdmin && <button>{dataSelected.create}</button>
            }
        </div>
    )
}
export default NavBar
*/