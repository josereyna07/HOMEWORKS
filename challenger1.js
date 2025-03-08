/*1. Diferencia entre arrow functions y regular functions:

Una expresión de función de flecha es una alternativa compacta a una expresión de función tradicional, con algunas diferencias semánticas y limitaciones deliberadas en el uso: las funciones de flecha no tienen sus propios enlaces a this , arguments o super , y no deben usarse como methods .
-------------------------------------------------------------------------------
*/
// Regular Function
function verificarParOImpar(num) {
    if (num % 2 === 0) {
        console.log(`${num} es un número par`);
    } else {
        console.log(`${num} es un número impar`);
    }
}

// Arrow Function
const verificarParOImpar = (num) => {
    console.log(`${num} es ${num % 2 === 0 ? "par" : "impar"}`);
};
