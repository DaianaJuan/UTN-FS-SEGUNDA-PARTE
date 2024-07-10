//Eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a sofia sin eliminar a abril
//REGLAS: NO SE PUEDE MIRAR EL ARRAY, SI CONSOLA

const nombres3 = ['María', 'Pedro', 'Leonel', 'Ezequiel', 'Elías', 'Lucas', 'Julieta', 'Abril', 'Lautaro']
console.log(nombres3);

let positionLeonel = nombres3.indexOf('Leonel');
console.log('La posicion de Leonel es: '+ positionLeonel); //2

//Eliminar a leonel
let eliminarAleonel = nombres3.splice(positionLeonel,1);
console.log('Eliminar a leonel: ',nombres3);

//eliminar a el anterior a lucas
let positionLucas = nombres3.indexOf('Lucas');
console.log('La posicion de lucas es: '+ positionLucas); //4

let eliminarAnterior = nombres3.splice(3,1);
console.log('Elimino al anterior de lucas: ', nombres3);

//agregar antes de abril a sofia sin eliminar a abril
let positionAbril = nombres3.indexOf('Abril');
console.log('La posicion de Abril es: '+ positionAbril); //5

let agregarAsofia = nombres3.splice(5,0,'Sofía');
console.log('Agrego a Sofía antes de Abril: ', nombres3);