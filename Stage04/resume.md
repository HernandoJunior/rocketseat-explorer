# RESUMO DOS ASSUNTOS:
[] Hoisting:


[] Tipos da dados primitivos:
  -String (Conj de caracteres.)
  -Number
  -Boolean
  -Undefined
  -null (Deveria ter um objeto mas não tem nada)

[] Estrutura de dados:
  -Array:
    const myArray = [1, 2, "a", "b", true]
    -conseguimos acessar as posições

  -Object:
    const myObject = { property: "value" }

[] Functions
  Named:
    -function myFunction() {}

  Anonymous:
    -const myFunction = function() {}

  Arrow:
    -const myFunction = () => {}
    
  Arguments & return:
    -function sum(a, b){
      return a + b
    }
    const sum = (a, b) => a + b
  
  Execute:
    myFunction() - sem argumentos
    sum(1, 2) - com argumentos

[] Fluxo da apicação:
  -IF, ELSE IF, ELSE
    const isRainning = true

    if (isRainning) {
      alert ("Está chovendo, pega o guarda chuvas ")
    } else {
      alert("Dia limpo")
    }

  -Switch:
    const water = "com gás"

    switch(water) {

      case "com gás":
        alert ("Essa água é com gás")
        break
      
      case "sem gás":
        alert("Essa agua é sem gás")
        break

    deafult:
      alert("Cadê minha agua?")
    }

[]  Estrutura de repetição:
  While
    let play = true
    while(play) {

    }

  For:
    let text = "abc"

    for (let i = 0; i < text.lenght(); i++>) {
      alert(text[i])
    }

  For of: (Serve para tirar propriedades de dentro e trabalhar com ela)
    for (letras of text) {
      alert(letras)
    }

[] Operadores matemáticos:
    * = multiplicação
    ** = exponencial
    / = divisao
    % = resto da divisao
    + = soma
    - = subtração

  Lógicos:
    & = E logico 
    || = OU lógico
    ! = NÃO lógico

  Comparação:
    > = maior
    < = menor
    >= = maior igual 
    <= = menor igual
    == : igualdade 
    === : igualdade no valor e no tipo
    != : desigualdade
    !== : estritamente diferente (valor ou tipo)

  Atribuição:
    = atribuição de valor
    *= multiplicação e atribuição de valor
    += soma e atribuição de valor
    -= subtração de atribuição de valor
    /= divisão de atribuição de valor

  Outros operadores e expressões:
    typeof = tipo do dado
    ++ = incremento dele mesmo
    -- = decremento
    {} = objeto vazio ou bloco de código
    [] = array vazio
    , = separa elementos de um array, objeto ou criação de multi variáveis. (let x, z, y, o;)

# PRÓXIMOS PASSOS:
[] Fazer os desafios e quizes
[] Revisar
[] Saber mais de js: olhar conteudos do discover.

  
