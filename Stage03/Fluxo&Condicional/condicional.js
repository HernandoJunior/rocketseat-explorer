//Estrutura de repetição
//for = para
//break = para a execução do loop
//continue = pula a execução do momento

// for(let i = 0; i <= 10; i++){
//   if(i == 50){
//     console.log(i)
//     break;
//   }
// }

//While = enquanto
//quando não sabemos o momento da parada do loop usamos o while
/*
let number = 1;
while(number < 10){
  number++
  console.log(number)
}
*/
//FOR OF 
/*
let name = 'Hernando'
let names = ['João', 'Paulo', 'Pedro']

for (let char of name){
  console.log(char)
}
*/
//FOR IN
//VAI CRIAR UM LOOP EM CIMA DE UM OBJETO PEGANDO AS PROPRIEDADES DE UM OOBJETO

let person = {
  name: 'Hernando',
  age : 26,
  weight: 89.8,
}

for(let property in person){
  console.log(property)
  console.log(person[property])
}