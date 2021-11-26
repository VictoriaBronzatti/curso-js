require('./global')

console.log(MinhaApp.saudacao())

//ou

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // só que assim qualquer pessoa pode alterar o nome, ai seria interessante usar o Freezer