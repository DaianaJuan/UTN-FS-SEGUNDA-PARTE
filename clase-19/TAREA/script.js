/*
El html tendremos un número que se mostrará en un span, dicho número sería inicialmente 1
Debemos crear el número mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado, el número debera incrementarse en 1

Crear el boton para decrementar
*/
/*
const btnIncrementarHTML = document.querySelector('.btn-incrementar')
const btnDecrementarHTML = document.querySelector('.btn-decrementar')
const contadorHTML = document.getElementById('contador')
const errorContadorHTNL = document.querySelector('.error-contador')


const renderizarContador = () => {
    contadorHTML.innerText = estadoContador
}

const incrementarContador = () => {
    estadoContador ++
    renderizarContador()
    limpiarError()
}

const renderizarError = (textoError) => {
    errorContadorHTNL.innerText = textoError
}

const limpiarError = () => {
    if(errorContadorHTNL.innerText){
        renderizarError('')
    }
}

const decrementarContador = () => {
    if(estadoContador > 1){
        estadoContador --
        
        renderizarContador()
    }
    else{
        renderizarError('No se puede decrementar')
    }
    
}


let estadoContador = 1
renderizarContador()

btnIncrementarHTML.addEventListener('click', incrementarContador)
btnDecrementarHTML.addEventListener('click', decrementarContador)
*/
//---------TAREA-------------------------------------------------------------------------------------

let estadoNumero = 0

const renderizarNumero = (estadoNumero) => {

    const estadoHTML = document.getElementById('estado')

    if(estadoNumero === 0){
        estadoHTML.innerHTML = `<button id='btn-comprar'>comprar</button>`
        document.getElementById('btn-comprar').addEventListener('click', aumentarNumero)
    }
    else{
        estadoHTML.innerHTML = `<button id='btn-restar'>-</button> <span>${estadoNumero}</span> 
        <button id='btn-aumentar'>+</button>
        `
        document.getElementById('btn-restar').addEventListener('click', restarNumero)
        document.getElementById('btn-aumentar').addEventListener('click', aumentarNumero)
    }
}

const aumentarNumero = () => {
    estadoNumero ++
    renderizarNumero(estadoNumero)

}

const restarNumero = () => {
    estadoNumero --
    renderizarNumero(estadoNumero)
}

renderizarNumero(estadoNumero)

//RESOLUCION DE TAREA EN CLASE--------------------------------------------------------------------------------
/*
const comprarBtnHTML = document.getElementById('comprar')
const contenedorContadorHTML = document.getElementById('elegir-cantidad')

const restarBtnHTML = document.getElementById('restar')
const contadorCantidadHTML = document.getElementById('numero')
const agregarBtnHTML = document.getElementById('agregar')



contenedorContadorHTML.style.display = 'none'

const handleBuy = () =>{
    comprarBtnHTML.style.display = 'none'
    contenedorContadorHTML.style.display = 'flex'
}

comprarBtnHTML.addEventListener('click', handleBuy)

const volver = ()=>{
    comprarBtnHTML.style.display = 'flex'
    contenedorContadorHTML.style.display = 'none'
}

const renderizarContador = () =>{
    contadorCantidadHTML.innerText = numero
}

const agregar = () =>{
    numero = numero + 1
    renderizarContador()
}

const restar = () =>{
    if (numero > 1){
    numero = numero - 1
    renderizarContador()
    }
    else if (numero === 1){
        volver()
    }
}

let numero = 1
renderizarContador()

agregarBtnHTML.addEventListener ('click', agregar)
restarBtnHTML.addEventListener('click', restar)
*/
