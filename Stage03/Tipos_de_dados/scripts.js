//TIPOS DE DADOS
/*
  String: Cadeia de caracteres
    "" //ASPAS DUPLAS
    ''// ASPAS SIMPLES
    ``//CRASE TEMPLATE STRINGS
*/
console.log('Hernando')

//INTERPOLAÇÃO NA TEMPLATE STRINGS
console.log(`
  Hernando
  Amaral
  Santos
  Junior
  ${1 + 1}`)

/*Numbers:
  33 // inteiros
  5.4 // reais - floats
  NaN // Not a Number
  Infinity // Infinito
*/
console.log(12.5 + 32)

/* Boolean:
      True or False
*/
console.log(true)
/*
  Undefined : Indefinido
  Null : 
    Nulo
    Objeto que nao possui nada dentro
    Diferente de indefinido
*/
console.log(null)
console.log(undefined)

/*Object:
      Objeto
      Propriedade / Atributos
      Funcionalidades / Métodos

      {propriedade: valor}
*/

console.log({
  name : "Hernando",
  idade: 26,
  andar: function(){ //Funcionalidade com metodos
    console.log('andar')
  }
})

/*Array: 
    Uma lista
    Agrupamento de dados

    ["Mayk", 36]
*/

console.log(
  [
    "Mayk", 
    36,
    "Leite",
    "Ovos"
  ]
)