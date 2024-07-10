/* 
1)
Escribe un programa que le pida al usuario que introduzca su edad mediante un prompt. Luego, el programa debe determinar y mostrar en la consola en qué etapa de la vida se encuentra el usuario según su edad. Las etapas son las siguientes:
Si la edad es menor de 0, mostrar "Edad no válida."
Si la edad es menor de 13, mostrar "Eres un niño."
Si la edad es entre 13 y 17 inclusive, mostrar "Eres un adolescente."
Si la edad es entre 18 y 64 inclusive, mostrar "Eres un adulto."
Si la edad es 65 o mayor, mostrar "Eres una persona mayor."
*/
/* let edad = Number(prompt('Ingresa tu edad'))//'pepe'

if(edad <=0){
    console.log('Edad no válida')
}
else if(edad<13){
    console.log('Eres un niño')
}
else if(edad >=13 && edad <=17){
    console.log('Eres un adolescente')
}
else if(edad>=18 && edad <=64){
    console.log('Eres un adulto')
}
else if(edad >= 65){
    console.log('Eres una persona mayor')
} */



/*
2)
Crea un programa que le pida al usuario que introduzca una calificación numérica (entre 0 y 100) mediante un prompt. El programa debe convertir la calificación a una letra según la siguiente escala:
90 a 100: A
80 a 89: B
70 a 79: C
60 a 69: D
0 a 59: F
Si la calificación introducida está fuera del rango de 0 a 100, el programa debe mostrar "Calificación no válida."
*/
/* let calificacion = prompt('Introduzca una calificacion')

if(calificacion >= 90 && calificacion<= 100){
    console.log('A')
}

else if (calificacion >= 80 && calificacion < 90){
    console.log('B')
}

else if (calificacion >= 70 && calificacion < 80){
    console.log('C')
}

else if (calificacion >= 60 && calificacion < 70){
    console.log('D')
}

else if (calificacion >= 0 && calificacion < 60){
    console.log('F')
}

else{
    console.log('Calificacion no valida')
}
 */


/*
3)
Desarrolla un programa que le pida al usuario las longitudes de los tres lados de un triángulo mediante tres prompts separados. El programa debe determinar y mostrar en la consola el tipo de triángulo que se forma (equilátero, isósceles o escaleno) según las longitudes de los lados introducidos:
Equilátero: todos los lados son iguales.
Isósceles: dos lados son iguales.
Escaleno: todos los lados son diferentes.
Si alguna de las longitudes introducidas es menor o igual a 0, el programa debe mostrar "Longitudes no válidas."
*/
/* 
let eje1= prompt('ingrese primer lado:')
let eje2= prompt('ingreso segundo lado:')
let eje3= prompt('ingrese tercer lado:')

if (eje1 >0 && eje2 >0 && eje3 >0) {
    //console.log("triangulo equilatero")
    if (eje1 == eje2 && eje2 == eje3){
        console.log("triangulo equiatero")
    }
    //Isósceles: dos lados son iguales.
    else if (eje1 == eje2 || eje1 == eje3 || eje2 == eje3) {
        console.log("triangulo Isóceles")
    }
    //Escaleno: todos los lados son diferentes.
    else if (eje1 != eje2 && eje1 != eje3 && eje2 != eje3) {
        console.log("triangulo escaleno")
    }
    
    opcion 2:
    else {
        console.log("triangulo escaleno")
    }
}
else{
    console.log('lados invalidos')
    if (eje1 <=0){
        console.log("el primer valor no es valido")
    }
    if (eje2 <=0) {
        console.log("el segundo valor no es valido")
    }
    if (eje3 <=0) {
        console.log("el tercer valor no es valido")
    }
} */

/*
4)
Escribe un programa que le pida al usuario que introduzca un número del 1 al 7 mediante un prompt. El programa debe mostrar en la consola el día de la semana correspondiente al número introducido:
1: Lunes
2: Martes
3: Miércoles
4: Jueves
5: Viernes
6: Sábado
7: Domingo
Si el número introducido no está en el rango de 1 a 7, el programa debe mostrar "Número no válido."
*/


/* let dia = Number(prompt("Por favor ingrese el dia"))


if (dia <0 || dia >7){
    console.log("Dia no valido")

} 
else if (dia === 1){
    console.log ("El dia es Lunes")

} 
else if (dia === 2){
    console.log ("El dia es Martes")

}
else if (dia === 3){
    console.log ("El dia es Miercoles")

}
else if (dia === 4){
    console.log ("El dia es Jueves")

} 
else if (dia === 5){
    console.log ("Gracias a dios es viernes")

} 
else if (dia === 6){
    console.log ("El dia es Sabado")

}
else if (dia === 7){
    console.log ("El dia es Domingo")
    
} 
 */

/*
5)
Crea un programa que le pida al usuario que introduzca una temperatura en grados Celsius mediante un prompt. El programa debe determinar y mostrar en la consola el estado del agua a esa temperatura:
Sólido: 0 grados Celsius o menos.
Líquido: entre mayor a 0 y 99 grados Celsius.
Gaseoso: 100 grados Celsius o más.
Si la temperatura introducida no es un número válido, el programa debe mostrar "Temperatura no válida." */
/* 
let temperatura = prompt( 'introduzca una temperatura en grados Celsius' )

if(!temperatura || isNaN(temperatura)){
    console.log('ERROR: temperatura debe ser un dato numerico')
}
else{
    if ( temperatura <= 0){
        console.log('ESTADO SOLIDO ')
    }
    else if ( temperatura >= 0 && temperatura<= 99 ){
        console.log('ESTADO LIQUIDO')
    }
    else if ( temperatura >= 100){
        console.log('ESTADO GASEOSO ')
    }
} */