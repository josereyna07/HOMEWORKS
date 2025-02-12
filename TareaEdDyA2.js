// TareaEdDyA2.js

const numbers = [1, 2, 3, 4, 5];
const words = ["apple", "banana", "cherry", "date"];
const mixed = [1, "text", true, { key: "value" }];

// 1) Métodos de mutación (modifican el array original)

// push(): Agrega elementos al final
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// pop(): Elimina el último elemento
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// shift(): Elimina el primer elemento
numbers.shift();
console.log(numbers); // [2, 3, 4, 5]

// unshift(): Agrega elementos al inicio
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4, 5]

// splice(): Añade o elimina elementos en una posición específica
numbers.splice(2, 1, 99); // Elimina 1 elemento en el índice 2 y añade 99
console.log(numbers); // [1, 2, 99, 4, 5]

// reverse(): Invierte el orden del array
numbers.reverse();
console.log(numbers); // [5, 4, 99, 2, 1]

// sort(): Ordena el array (por defecto como strings)
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 5, 99]

// fill(): Rellena el array con un valor
numbers.fill(0, 1, 3); // Rellena desde el índice 1 hasta el 3 con "0"
console.log(numbers); // [1, 0, 0, 5, 99]

// copyWithin(): Copia parte del array dentro del mismo array
numbers.copyWithin(1, 3, 5);
console.log(numbers); // [1, 5, 99, 5, 99]

// 2) Métodos de acceso (no modifican el array)

// concat(): Combina arrays
const combined = numbers.concat(words);
console.log(combined);

// includes(): Verifica si un elemento está en el array
console.log(numbers.includes(5)); // true

// indexOf(): Retorna el índice de un elemento
console.log(numbers.indexOf(5)); // 1

// lastIndexOf(): Última aparición de un elemento
console.log(numbers.lastIndexOf(5)); // 3

// join(): Convierte el array en un string
console.log(words.join(" - ")); // "apple - banana - cherry - date"

// slice(): Extrae una parte del array sin modificarlo
console.log(numbers.slice(1, 3)); // [5, 99]

// toString(): Convierte el array en string
console.log(numbers.toString()); // "1,5,99,5,99"

// 3) Métodos de iteración (devuelven un nuevo array)

// map(): Transforma cada elemento
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 25, 9801, 25, 9801]

// filter(): Filtra los elementos según una condición
const greaterThanFive = numbers.filter(num => num > 5);
console.log(greaterThanFive); // [99, 99]

// reduce(): Reduce el array a un único valor
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 209

// forEach(): Ejecuta una función por cada elemento
numbers.forEach(num => console.log(num * 2));

// find(): Devuelve el primer elemento que cumpla la condición
console.log(numbers.find(num => num > 3)); // 5

// findIndex(): Índice del primer elemento que cumpla la condición
console.log(numbers.findIndex(num => num > 3)); // 1

// every(): Verifica si todos los elementos cumplen una condición
console.log(numbers.every(num => num > 0)); // true

// some(): Verifica si al menos un elemento cumple la condición
console.log(numbers.some(num => num < 0)); // false

// 4) Métodos avanzados

// flat(): Aplana un array de arrays
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap(): Combinación de map() y flat()
const flatMapped = words.flatMap(word => word.split(""));
console.log(flatMapped);

// from(): Crea un array desde un iterable
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']

// isArray(): Verifica si es un array
console.log(Array.isArray(numbers)); // true

// keys(), values(), entries(): Iteradores de un array
for (let key of numbers.keys()) console.log(key); // Índices
for (let value of numbers.values()) console.log(value); // Valores
for (let [index, value] of numbers.entries()) console.log(index, value); // Índice y valor
