const alertar = () => { alert('Hola Mundo')}

const btn2HTML = document.getElementById('btn-2')

btn2HTML.onclick = alertar

//esta forma es la mejor. BUSCAR LISTA DE NOMBRES DE EVENTOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const btn3HTML = document.querySelector('.btn-3')

btn3HTML.addEventListener('click', alertar)

//---------FORM----------------------------------------------------------------------------------------------------

const formLoginHTML = document.getElementById('form-login')

//obtener valores a traves de la consola

console.dir(formLoginHTML.password.value)
console.dir(formLoginHTML.username.value)

const handleLogin = (evento) => {
    /*previene el comportamiento por defecto */
    evento.preventDefault()
    console.log('Formulario enviado')
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username.value)
}

formLoginHTML.addEventListener('submit', handleLogin)