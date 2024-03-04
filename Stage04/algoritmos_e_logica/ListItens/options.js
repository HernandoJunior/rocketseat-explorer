/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/


let optionUser = parseInt(prompt(`
  Olá, usuário! Digite o número da opção desejada!

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Deletar um item
  4. Sair do programa
`))

let listItens = [];
let optionsItens = 0;

while(optionUser != 4){

  switch (optionUser){

    case 1:
      optionsItens = parseInt(prompt("Quantos itens voce quer cadastrar? "));

      for(let i = 0; i < optionsItens; i++){
        let item = prompt(`Digite o ${i + 1} que quer cadastrar: `)
        listItens.push(item)
      }
    break;

    case 2:
      if(listItens.length == 0){
        alert("Não há itens na lista")
      } else {
      alert(listItens)
      }
    break;

    case 3:
      if(listItens.length == 0){
        alert("Não há itens na lista")
      } else {
      let itemName = prompt("Digite o que deseja deletar: ")
      listItens.splice(itemName)
      } 
    break;

  default:
    alert("Opção invalida, tente novamente!")
}

  optionUser = parseInt(prompt(`
  Olá, usuário! Digite o número da opção desejada!

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Deletar um item
  4. Sair do programa`))
}

alert("Saindo do programa...");
