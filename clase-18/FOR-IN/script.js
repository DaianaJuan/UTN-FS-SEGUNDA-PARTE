/*for(let propiedad in persona){
    console.log(persona[propiedad])
}
*/
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 18
}
/* 
A partir del sig objeto de informacion quiero que generen una plantilla de informacion y la muestren por consola:
nombre: pepe\n
apellido: suarez\n
edad: 18\n
*/
/* Este es el output a lograr */
//console.log('nombre: pepe\napellido: suarez\nedad: 18\n')

for (let user in persona) {
    console.log(`${user}: ${persona[user]}`);
}
