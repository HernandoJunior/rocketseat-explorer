//Manipulando strings e numeros

//Transforme letras minusculas em maiusculas. Faça contrario disso também
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
// toLowerCase() = minusculas

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transorme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o amor!"
//Identificando os epaços na phrase
let myArray = phrase.split(" ")
//Coloando underlines entre os epaços
let phraseWithUnderline = myArray.join("_")
console.log(phraseWithUnderline)

//Verificar se o texto contém a palavra Amor
let phrase0 = "Eu quero viver!"
console.log(phrase0.includes("Amor"))

