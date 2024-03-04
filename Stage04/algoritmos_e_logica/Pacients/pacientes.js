/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

//Object literal
const listPatients = [
  {
    name: "Hernando",
    age: 26,
    weight: 86.9,
    height: 1.80,
  },

  {
    name: "Maria",
    age: 5,
    weight: 20,
    height: 0.8,
  }
]

let patiansNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

for(let patients of listPatients)
{
  patiansNames.push(patients.name)
  patientsAge.push(patients.age)
  patientsWeight.push(patients.weight)
  patientsHeight.push(patients.height)

  alert(`O paciente ${patiansNames[0]} tem ${patientsAge[0]} anos e pesa ${patientsWeight[0]} kgs, medindo ${patientsHeight[0]}cm`)
}