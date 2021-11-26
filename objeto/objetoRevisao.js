// coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto ['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
// como é uma função dinamica eu consigo add manualmente e tbm deletar
delete produto.preco
delete produto ['marca do produto']

console.log(produto)


const carro = {
    modelo: 'A4', 
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: ' Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000 /// é possivel fazer através de pontos ... aqui vc usa quando vc já sabe o nome do atributo
carro['proprietario'] ['endereco'] ['logradouro'] = 'Av Gigante' // é possivel fazer através de []... é legal essa forma quando vc tem a introspecção do objeto que vc quer acessar ... aqui vc utiliza quando não sabe o nome do atributo
console.log(carro)

// se eu quiser deletar o carro
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro // posso deletar funções tbm
console.log(carro)
console.log(carro.condutores) // eu consigo acessar mesmo que foi excluido pq o js permite que eu acesse pois, carro ainda existe