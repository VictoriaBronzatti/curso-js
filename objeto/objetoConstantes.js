const pessoa = { nome: 'João'} 
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // aqui vc está congelando um objeto... vc não consegue alterar o objeto, adicionar e não consegue excluir um objeto... aqui vc praticamente acabou de passar o objeto para constante 

pessoa.nome = 'Maria'
console.log(pessoa.nome)