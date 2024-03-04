//CRIAR UM APLICATIVO DE FRASES MOTIVACIONAIS
//declaração da função
function createPhrases(){
  console.log('Estudar é muito bom')
  console.log('Paciencia e persistencia')
  console.log('Revisar é a mãe do aprendizado')
}

createPhrases()

//function expressions
//function anonymous
// parâmetros (parameters)

const sum = function (number1, number2){
  let total = number1 + number2
  return total // retornando um valor final para a função
}

let number1 = 25
let number2 = 34

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`A soma é ${sum(number1+ number2)}`)

//arrow function
// geralmente é atribuida a uma constante
const sayMyName = () => {
  console.log('Hernando')
}

//callback function - função que é passada como parametro
function sayMyName(name){
  console.log(name)
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)

/*function () contructor - função construtora

    *expressão new
    *cria um novo objeto
    *this keyword 
*/

function Person(name){
  this.name = name
  this.walk = function(){
    return this.name + ' está andando'
  }
}

// criando um novo objeto
const hernando = new Person("Hernando")
const duda = new Person("Duda")

console.log(hernando.walk)
console.log(duda.walk)
