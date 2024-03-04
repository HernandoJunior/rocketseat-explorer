//Expressions = qualquer linha de código que define algo

/*Operators
  Binary
  Unary
  Ternary
*/
//Binary
let number = 1;
  console.log(number + 1)//dois valores para que o operador esteja entre eles

//Unary
  console.log(++number)//operadores de incremento ou decremento
  console.log(typeof number)

//Ternary

  console.log(false ? "alo" : "nada")

//Expressão new = serve para criar um novo objeto

let nome = new String("Hernando")
nome.sobrenome = "Amaral"
console.log(nome)

//Operadores unários
//  typeof
//  delete

const person = {
  name: "Hernando",
  age: 26,
}

delete person.age
console.log(person)