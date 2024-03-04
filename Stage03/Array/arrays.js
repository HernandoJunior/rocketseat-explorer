//Arrays

const animals = [
  'Lion',
  'Monkey',
  'Cat'
]

console.log(animals[0])
console.log(animals.length)

//Manipulando Arrays

//Criar Array como construtor
let array = new Array('a', 'b', 'c')
//Array foi criado com 3 objetos

//Contar elementos de um array
.length

//Transformar uma cadeia de caracteres em elemtos de um array
let word = "Manipulation"
console.log(Array.from(word))

//Sequencia:
  let techs = ["html", "css", "js"]
 //1. Adicionar um item no fim
  techs.push("nodejs")
  //2. Adicionar no começo
  techs.unshift("SQL")
  //3. remover do fim
  techs.pop()
  //4. remover do começo
  techs.shift()
  //5. Pegar somente alguns elementos do array
  techs.slice(1, 3)//posição de inicio, posição final
  //6.remover 1 ou mais intens em qualquer posição do array
  techs.splice(1, 1)
  // 7.Encontrar a posição de um elemento no array
  let position = techs.indexOf('css')
  techs.splice(position, 1)