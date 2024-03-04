function sumNumbers() {
 let n1 = parseFloat(document.getElementById("number1").value);
 let n2 = parseFloat(document.getElementById("number2").value);
 let soma = n1 + n2;
 document.getElementById("result-soma").innerHTML = `A soma dos dois numeros é: ${soma}`
}

function subNumbers() {
 let n1 = parseFloat(document.getElementById("number1-subtracao").value);
 let n2 = parseFloat(document.getElementById("number2-subtracao").value);
 let sub = n1 - n2;
 document.getElementById("result-sub").innerHTML = `A subtração dos dois numeros é: ${sub}`
}

function divNumbers() {
 let n1 = parseFloat(document.getElementById("number1-divisao").value);
 let n2 = parseFloat(document.getElementById("number2-divisao").value);
 let div = n1 / n2;
 document.getElementById("result-div").innerHTML = `A divisao dos dois numeros é: ${div.toFixed(2)}`
}

function multiNumbers() {
 let n1 = parseFloat(document.getElementById("number1-multi").value);
 let n2 = parseFloat(document.getElementById("number2-multi").value);
 let multi = n1 * n2;
 document.getElementById("result-multi").innerHTML = `A multiplicação dos dois numeros é: ${multi}`
}

function checkPar() {
 let n1 = parseFloat(document.getElementById("number1-par").value);
 if (n1 % 2 == 0){
  document.getElementById("result-par").innerHTML = "Numero par"
 } else{
  document.getElementById("result-par").innerHTML = "Numero impar"
 }
}

function myFunction() {
  document.getElementById("hello").innerHTML = "Hello World";
}