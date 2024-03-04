/* Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/
// O JavaScript possui uma característica chamada Prototype, 
// que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, 
// que são lidados como objetos.
let nome = "Hernando".length
let number = 23.0.__proto__

//Type conversion = mudança de tipos de dados
console.log(Number('9') + 5)

//Transformando string em numero e numero em string

let nuber = 321
let string = '123'

Number(string)
String(nuber)

//Contando quantos caracteres tem uma palavra e quantos digitos tem um numero
let palavra = 'Hernando'
let numero = 123

console.log(palavra.length, String(numero))

//Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
let numero3 = 345.3453525345
console.log(number.toFixed(2).replace(".", ","))