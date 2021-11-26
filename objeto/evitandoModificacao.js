// Object.preventExtensions -> ele vai previnir e não vai permitir que o seu objeto não seja extentido // vc pode excluir mas não pode adicionar novos

const produto = Object.preventExtensions ({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // aqui ele alterou o nome do objeto
produto.descricao = 'Borracha escolar branca' // como descrição não

delete produto.tag
console.log(produto)

//Object.seal -> vc vai selar o objeto, vc não consegue add ou excluir atributos, mas consegue modificar 
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // aqui vc percebe que não conseguiu add o sobrenome
delete pessoa.nome // não conseguiu excluir o nome
pessoa.idade = 29// conseguiu alterar a idade pq já existia esse objeto
console.log(pessoa)