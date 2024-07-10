
/* 
Crear una funcion que dado 3 valores nos devuelva la sumatoria

calcularSumatoria(1,2,3) => 6


Crear una funcion que reciba 2 numeros y siempre devuelva el mayor

mayor(7,2) 7

crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'

generarEmail('pepe') => 'pepe@gmail.com'
*/

function calcularSumatoria(num1,num2,num3){
    return num1 + num2 + num3;
};
console.log(calcularSumatoria(1,2,3));

//FUNCION FLECHA

const calcularSumatoriaDos = (num1, num2, num3) => num1 + num2 + num3;
console.log(calcularSumatoriaDos(3,2,4));

const devolverElNumeroMayor = (a,b) => {
    if(a>b){
        return a
    }else{
        return b
    };
}
console.log(devolverElNumeroMayor(99,2));

const generarEmail = (correo) => correo + '@gmail.com';
console.log(generarEmail('dai'));

//validar string

const solicitarYvalidarString = () => {
    let stringSolicitado = prompt('Ingrese un dato')
    while(!stringSolicitado || !isNaN(stringSolicitado)){
        alert('ERROR');
        stringSolicitado = prompt('Ingrese otro dato')
    };
    return stringSolicitado;
};

