const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2},
]

//Imperativo // ensinar para alguém exatamente os passos que vc tem fazer
let total1 = 0 
for (var i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo // melhor // vc diz o que tem que ser feito e internamente as coisas vão sendo feitas
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)