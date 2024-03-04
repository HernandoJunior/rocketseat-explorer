//Operadores Aritiméticos

//multiplicação
console.log(12 * 12)
//divisão
console.log(12 / 12)
//soma
console.log(12 + 12)
//subtração
console.log(12 - 12)
//resto da divisão
console.log(11 % 11)
//incremento
let number = 0
number++
//decremento
number--
//exponencial
console.log(2 ** 3)

//Operadores de comparação
let one = 1
let two = 2

console.log(one == two)

//Operador condicional (ternário)

/*
  Dependendo da condição, nós recebemos valores diferentes

  Condição então valor 1 se não valor 2
  condition ? valor1 : valor2
*/

//Exemplos
//Café da manhã top
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
 
console.log(niceBreakfast)

//Operadores Flasy

/* 
  Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

  false
  0
  -0
  ""
  null
  undefined
  NaN
*/

//Truthy

/*
  Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity

*/

/* Operadores de procedencia
  Operation procedence

  * grouping  ()
  *negação e incremento  ! ++ --
  * multiplicação e divisao  * /
  * adição e subtração + -
  * relacional < <= > >=
  * igualdade == != === !==
  * AND &&
  * OR ||
  * condicional ?:
  * assignment (atribuição) = += -= *=
*/