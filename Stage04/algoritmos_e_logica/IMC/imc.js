/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Hernando",
    age: 26,
    weight: 86,
    height: 190
  },
    
  {
    name: "Maria",
    age: 5,
    weight: 20,
    height: 130
  },

  {
    name: "João",
    age: 30,
    weight: 89.9,
    height: 196
  }
]

//IMC = PESO / (ALTURA * ALTURA)

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}