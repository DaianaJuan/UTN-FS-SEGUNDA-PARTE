
const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return password && password.length >= 6 && tieneMayuscula(password)
}



const solicitarDato = (objetoDeConfeccion) => {

    let dato = prompt(objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato = prompt(objetoDeConfeccion.error)
    }
    return dato
}

const DATOS = {
    EMAIL: {
        mensaje: 'Ingrese un email, por favor.',
        error: 'Error email invalido: ingrese nuevamente el email',
        validacion: validacionEmail
    },
    PASSWORD:{
        mensaje: 'Ingrese una password',
        error: 'Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula',
        validacion: validacionPassword
    } 

}


const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(DATOS.EMAIL)
    usuario.password = solicitarDato(DATOS.PASSWORD)

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}


//let objetoString = JSON.stringify(login())
//console.log(localStorage.setItem('usuario', objetoString))

//es mejor hacerlo asi
//console.log(localStorage.setItem('usuario', JSON.stringify(login())))

if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}

const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))

const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}


/* guardarEnHistorial({nombre: 'tomas',password: 'asdfg'}) */



/* Caso correcto */
/* const renderizarHistorial = () =>{
  const historial = obtenerHistorial()
  let listaHistorial = ''
  for(let obj of historial){
    listaHistorial = listaHistorial + `
    Accion: ${obj.accion}
    Operacion: ${obj.operacion}
    Numeros: ${obj.a}, ${obj.b}
    Resultado: ${obj.resultado}
    `
  }
  return listaHistorial
}
alert(renderizarHistorial()) */

/* 
guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 2,
    b: 6,
    resultado: 8,
    fecha:  '17|03/2024'
})
guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 5,
    b: 5,
    resultado: 10,
    fecha:  '27|08/2024'
})

guardarEnHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 10,
    b: 6,
    resultado: 16,
    fecha:  '31|05/2024'
}) */
/*     guardarEnHistorial({
        accion: 'calculadora',
        operacion: '+',
        a: 10,
        b: 6,
        resultado: 16,
        fecha:  '31|05/2024'
    }) */

/* TODO: Fijate que el historial debe venir de localStorage */

const renderizarHistorial = () =>{
    let listaHistorial = ''
    const historial = obtenerHistorial()
    for (const objeto of historial){
        listaHistorial = listaHistorial + `
        accion: ${objeto.accion}
        operacion: ${objeto.operacion}
        numeros: ${objeto.a}, ${objeto.b}
        resultado: ${objeto.resultado}
        fecha: ${objeto.fecha}
        `
    }
    return listaHistorial
}

alert(renderizarHistorial())