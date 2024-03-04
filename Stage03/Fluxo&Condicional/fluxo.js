// Control flow

//IF / ELSE
let copo = true

if (copo == true){
  console.log('lavar o copo')
}
else {
  console.log('copo limpo')
}

//Switch

// switch(expression){
//   case 'a':
//     // código
//     console.log('a')
//     break;

//   case 'b':
//     //codigo
//     console.log('b')
//     break;
  
//   default:
//     console.log('default')
//     break
// }

//Throw
  function sayMyName(name = ''){
    if (name === ''){
      throw 'Nome é obrigatorio'
    }

    console.log(name)
  }

//Try/Catch
try{
  sayMyName("Hernando")
} catch(e){
  console.log(e)
}

console.log(('após a função de error'))