/*
const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

Mostrarlo dentro de un div

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}

 */

const usuario = {
    nombre: 'Daiana',
    apellido: 'Juan',
    direccion: 'Baker Street 221B',
    edad: 32
}
const objetoUsuario = document.getElementById('objeto-usuario')

objetoUsuario.innerHTML = `
            <h2>Nombre completo: ${usuario.nombre} ${usuario.apellido}</h2>
            <p><span>Edad: ${usuario.edad}</span></p>
            <span>Dirección: ${usuario.direccion}</span>
`
