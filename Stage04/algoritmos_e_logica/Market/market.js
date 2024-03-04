alert("Olá, vamos iniciar sua lista de compras!")

let numero_itens = prompt("Quantos itens voce quer digitar? ");
//PARA O ITEM QUE COMEÇA EM 0, IR ATÉ NUMERO DE ITENS E PARAMETRO DE CONDIÇÃO
let items = [];

for (let i = 0; i < numero_itens; i++){
  items[i] = prompt(`Digite o ${i + 1} item: `);
}

alert(`Veja sua lista de compras: ${items}`);